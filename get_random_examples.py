import numpy as np
import os, glob
import argparse

from generate_random_splits import generate_random_splits

def prepare_sample_label_map(args, split, limit=200):
    basedir = args.data
    split_name = args.splits[split]
    metadir = os.path.join(basedir, split_name, 'metadata')

    with open(os.path.join(metadir, 'combined.npy'), 'rb') as f:
        metadata = np.load(f)

    dict_map = {}
    for entry in metadata[:limit]:
        path = os.path.join(basedir, split_name, entry[0], entry[2])
        dict_map[path] = ('yes' if entry[4] == '1' else 'no')

    return dict_map

def random_sample_images(args, map_sam_to_lab):
    num_samples = args.num_samples

    num_pos_samples = num_samples/2
    num_neg_samples = num_samples/2

    pos_map = {}
    neg_map = {}

    for key, val in map_sam_to_lab.iteritems():
        if val == 'yes':
            pos_map[key] = val
        else:
            neg_map[key] = val

    pos_samples = np.random.choice(pos_map.keys(), num_pos_samples)
    neg_samples = np.random.choice(neg_map.keys(), num_neg_samples)
    return pos_samples, neg_samples

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Prepare data for JSPsych Experiments')
    parser.add_argument('-d', '--data', type=str, help='Path to the root directory of dataset, which contains \
            the different split directories (e.g.: baseline, ix1, ix2) with sample images and metadata, respectively')
    parser.add_argument('-sp', '--splits', nargs='*', default=['baseline-', 'ix1-', 'ix2'], help='Which splits to use to \
            form the dataset for experiments')
    parser.add_argument('-n', '--num-samples', type=int, help='Number of random samples to draw from the given \
            set of images using the metadata to balance classes (should be divisible by number of classes), \
            from each of the splits')
    parser.add_argument('-pd', '--project-dir', type=str, help='Path to the root directory of the JSPsych project directory \
            where the samples will be stored in subdirectories splitN (N=1..nsplits)')
    parser.add_argument('--train', action='store_true', help='Whether the present split is training split or not')

    args = parser.parse_args()

    final_pos = []
    final_neg = []
    all_sam_to_lab = {}
    for i in range(len(args.splits)):
        map_sam_to_lab = prepare_sample_label_map(args, split=i)
        all_sam_to_lab.update(map_sam_to_lab)
        pos_samples, neg_samples = random_sample_images(args, map_sam_to_lab)
        assert len(pos_samples) == len(neg_samples) == args.num_samples / 2
        if i == 0:
            final_pos = list(pos_samples)
            final_neg = list(neg_samples)
        else:
            final_pos.extend(list(pos_samples))
            final_neg.extend(list(neg_samples))

    if args.train:
        samples, labels = generate_random_splits(final_pos, final_neg, all_sam_to_lab, n_splits=1)
    else:
        samples, labels = generate_random_splits(final_pos, final_neg, all_sam_to_lab)

    if args.project_dir:
        from shutil import copy
        for i, sam_list in enumerate(samples):
            if not args.train:
                splitpath = os.path.join(args.project_dir, 'img', 'split'+str(i+1))
                if not os.path.exists(splitpath):
                    os.makedirs(splitpath)
            else:
                splitpath = os.path.join(args.project_dir, 'img', 'train')
                if not os.path.exists(splitpath):
                    os.makedirs(splitpath)

            for sam in sam_list:
                fname = '_'.join(sam.split('/')[-4:])
                newpath = os.path.join(splitpath, fname)
                copy(sam, newpath)

            if not args.train:
                print "Split "+str(i+1)+" processed and copied to project directory"
            else:
                print "Train examples processed and copied to project directory"

