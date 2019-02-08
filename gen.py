import numpy as np
import os, glob
import argparse

from generate_random_splits import generate_random_splits

def prepare_sample_label_map(args, split):
    basedir = args.data
    split_name = args.splits[split]
    metadir = os.path.join(basedir, split_name, 'metadata')

    with open(os.path.join(metadir, 'combined.npy'), 'rb') as f:
        metadata = np.load(f)

    dict_map = {}
    for entry in metadata:
        path = os.path.join(basedir, split_name, entry[0], entry[2])
        dict_map[path] = ('yes' if entry[4] == '1' else 'no')

    return dict_map

def sample_images(args, map_sam_to_lab):
    samples = []
    num_samples = args.num_samples

    # Get the positive and negative samples separately
    num_pos_samples = num_samples/2
    num_neg_samples = num_samples/2

    pos_map = {}
    neg_map = {}

    for key, val in map_sam_to_lab.iteritems():
        if val == 'yes':
            pos_map[key] = val
        else:
            neg_map[key] = val

    offset = 0
    pkeys = pos_map.keys()
    nkeys = neg_map.keys()
    # Generate the samples for all subjects from this dataset
    for n in range(args.num_subjects):
        # 1. Sample sequentially first and make sure you have required number of samples
        pos_samples = []; neg_samples = []
        # Go circular, coz number of subjects may not be a divisor of number of samples
        for i in range(n*num_pos_samples, (n+1)*num_pos_samples):
            pos_samples.append(pkeys[i % len(pkeys)])
        for i in range(n*num_neg_samples, (n+1)*num_neg_samples):
            neg_samples.append(nkeys[i % len(nkeys)])
        assert len(pos_samples) == num_pos_samples and len(neg_samples) == num_neg_samples

        # 2. Combine the pos + neg, permute and add to final samples array
        temp_samples = np.concatenate([pos_samples, neg_samples])
        temp_samples = np.random.permutation(temp_samples)
        samples.append(temp_samples)

    return samples

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Prepare data for JSPsych Experiments')
    parser.add_argument('-d', '--data', type=str, help='Path to the root directory of dataset, which contains \
            the different split directories (e.g.: baseline, ix1, ix2) with sample images and metadata, respectively')
    parser.add_argument('-sp', '--splits', nargs='*', default=['baseline-', 'ix1-', 'ix2'], help='Which splits to use to \
            form the dataset for experiments')
    parser.add_argument('-n', '--num-samples', type=int, help='Number of random samples to draw from the given \
            set of images using the metadata to balance classes (should be divisible by number of classes), \
            from each of the splits')
    parser.add_argument('-s', '--num-subjects', type=int, help='Number of subjects to prepare the data for')
    parser.add_argument('-pd', '--project-dir', type=str, help='Path to the root directory of the JSPsych project directory \
            where the samples will be stored in subdirectories splitN (N=1..nsplits)')
    parser.add_argument('--train', action='store_true', help='Whether the present split is training split or not')

    args = parser.parse_args()

    all_sam_to_lab = {}
    sample_level = []
    for i in range(len(args.splits)):
        map_sam_to_lab = prepare_sample_label_map(args, split=i)
        all_sam_to_lab.update(map_sam_to_lab)
        samples = sample_images(args, map_sam_to_lab)
        samples.extend(samples)
        sample_level.append(samples)

    splits_dir = os.path.join(args.project_dir, 'splits')
    if not os.path.exists(splits_dir):
        os.makedirs(splits_dir)

    import itertools
    from shutil import copy
    level_order_perms = list(itertools.permutations([0,1,2]))
    finger_assign_perms = ['normal', 'inverted']

    import MySQLdb
    import csv
    conn = MySQLdb.connect(host="localhost",
                           user="kyle",
                           passwd="1234567890",
                           db="test",
                           port=3306,
                           unix_socket="/opt/lampp/var/mysql/mysql.sock")
    curs = conn.cursor()
    sub_itr = 0
    complete = False
    for speed in [800, 1200, 1600]:
        if sub_itr == 3*args.num_subjects:
            complete = True

        while not complete:
            for i,fperm in enumerate(finger_assign_perms):
                for j,lperm in enumerate(level_order_perms):
                    subdir = os.path.join(args.project_dir, 'vids', str((sub_itr%args.num_subjects)+1))
                    if not os.path.exists(subdir):
                        os.makedirs(subdir)
                    idx1 = lperm[0]; idx2 = lperm[1]; idx3 = lperm[2]
                    csvfile = os.path.join(splits_dir, 'subject-'+str((sub_itr%args.num_subjects)+1)+'.csv')
                    try:
                        curs.execute("""INSERT INTO cnist_exp_settings VALUES (%s,%s,%s,%s,%s)""", (j+1,i+1,sub_itr+1,csvfile,speed))
                        conn.commit()
                    except:
                        print "Couldn't insert into table"
                        conn.rollback()
                    try:
                        curs.execute("""INSERT INTO cnist_exp_runid(subject_id, state) VALUES (%s,%s)""", ('dummyid', 'incomplete'))
                        conn.commit()
                    except:
                        print "Couldn't insert into table"
                        conn.rollback()

                    if os.path.exists(csvfile):
                        continue
                    with open(csvfile, 'w') as f:
                        writer = csv.writer(f, delimiter=',')
                        writer.writerow(['sample_num', 'level', 'sample_path', 'sample_gt'])
                        for k,x in enumerate(sample_level[idx1][sub_itr]):
                            copy(x, os.path.join(subdir, '_'.join(x.split('/')[-4:])))
                            pngdir = '_'.join(x.split('/')[-4:])[:-4]
                            new_path = os.path.join(subdir, pngdir)
                            writer.writerow([str(k), 'base', new_path, all_sam_to_lab[x]])
                        for k,x in enumerate(sample_level[idx2][sub_itr]):
                            copy(x, os.path.join(subdir, '_'.join(x.split('/')[-4:])))
                            pngdir = '_'.join(x.split('/')[-4:])[:-4]
                            new_path = os.path.join(subdir, pngdir)
                            writer.writerow([str(k), 'lev1', new_path, all_sam_to_lab[x]])
                        for k,x in enumerate(sample_level[idx3][sub_itr]):
                            copy(x, os.path.join(subdir, '_'.join(x.split('/')[-4:])))
                            pngdir = '_'.join(x.split('/')[-4:])[:-4]
                            new_path = os.path.join(subdir, pngdir)
                            writer.writerow([str(k), 'lev2', new_path, all_sam_to_lab[x]])

                    print "S"+str(sub_itr+1)+": Processed permutation ["+str(lperm)+"] (level) with "+fperm+" (finger assignment) with rt "+str(speed)+" ms"
                    sub_itr += 1
            if sub_itr == args.num_subjects or sub_itr == 2*args.num_subjects or sub_itr == 3*args.num_subjects:
                break
    conn.close()
