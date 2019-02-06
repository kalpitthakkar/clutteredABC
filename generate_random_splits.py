import numpy as np
import os, glob
import datetime

def generate_random_splits(pos_samples, neg_samples, map_sam_to_lab, n_splits=5):
    num_pos_samples = len(pos_samples)
    num_neg_samples = len(neg_samples)
    assert num_pos_samples == num_neg_samples

    tstamp = datetime.date.today()
    if n_splits == 1:
        fn = open('log_gen-'+str(tstamp)+'-train.txt', 'w')
    else:
        fn = open('log_gen-'+str(tstamp)+'-testsplits.txt', 'w')

    num_samples_per_split = num_pos_samples / n_splits

    pos_samples_1 = pos_samples[:num_pos_samples/3]
    pos_samples_2 = pos_samples[num_pos_samples/3:2*num_pos_samples/3]
    pos_samples_3 = pos_samples[2*num_pos_samples/3:]
    neg_samples_1 = neg_samples[:num_neg_samples/3]
    neg_samples_2 = neg_samples[num_neg_samples/3:2*num_neg_samples/3]
    neg_samples_3 = neg_samples[2*num_neg_samples/3:]

    split_samples = []
    split_labels = []
    rng_state = np.random.get_state()
    fn.write('Random state: {}\n'.format(rng_state))
    psams1 = np.random.permutation(pos_samples_1)
    psams2 = np.random.permutation(pos_samples_2)
    psams3 = np.random.permutation(pos_samples_3)
    np.random.set_state(rng_state)
    nsams1 = np.random.permutation(neg_samples_1)
    nsams2 = np.random.permutation(neg_samples_2)
    nsams3 = np.random.permutation(neg_samples_3)
    for i in range(n_splits):
        fn.write('Split '+str(i+1)+':\n')
        ps1 = psams1[(num_samples_per_split/3)*i : (num_samples_per_split/3)*(i+1)]
        ps2 = psams2[(num_samples_per_split/3)*i : (num_samples_per_split/3)*(i+1)]
        ps3 = psams3[(num_samples_per_split/3)*i : (num_samples_per_split/3)*(i+1)]
        ns1 = nsams1[(num_samples_per_split/3)*i : (num_samples_per_split/3)*(i+1)]
        ns2 = nsams2[(num_samples_per_split/3)*i : (num_samples_per_split/3)*(i+1)]
        ns3 = nsams3[(num_samples_per_split/3)*i : (num_samples_per_split/3)*(i+1)]
        sams1 = np.concatenate([ps1, ns1])
        sams2 = np.concatenate([ps2, ns2])
        sams3 = np.concatenate([ps3, ns3])
        sams1 = np.random.permutation(sams1)
        sams2 = np.random.permutation(sams2)
        sams3 = np.random.permutation(sams3)
        sams = [sams1, sams2, sams3]
        sams = np.concatenate([sams[0], sams[1], sams[2]])
        labs = []
        fn.write('Samples:'+'\n')
        for sam in sams:
            lab = map_sam_to_lab[sam]
            if n_splits == 1:
                fn.write("{ stimulus: './home/kalpit/train/fast/"+'_'.join(sam.split('/')[-4:])+"', data: { part: 'train', correct_response: '"+map_sam_to_lab[sam]+"'}, correct_key: %d },\n" % (189 if lab == 'no' else 187))
            else:
                fn.write("{ stimulus: 'img/split"+str(i+1)+"/"+'_'.join(sam.split('/')[-4:])+"', data: { part: 'split"+str(i+1)+"', correct_response: '"+map_sam_to_lab[sam]+"'}, correct_key: %d },\n" % (189 if lab == 'no' else 187))
            labs.append(lab)
        labs = np.asarray(labs)
        split_samples.append(sams)
        split_labels.append(labs)

    fn.close()
    return split_samples, split_labels
