import numpy as np
import os, glob
import datetime

def generate_random_splits(pos_samples, neg_samples, map_sam_to_lab, n_splits=5):
    num_pos_samples = len(pos_samples)
    assert num_pos_samples == len(neg_samples)

    tstamp = datetime.date.today()
    fn = open('log_gen-'+str(tstamp)+'.txt', 'w')

    num_samples_per_split = num_pos_samples / n_splits

    split_samples = []
    split_labels = []
    rng_state = np.random.get_state()
    fn.write('Random state: {}\n'.format(rng_state))
    psams = np.random.permutation(pos_samples)
    np.random.set_state(rng_state)
    nsams = np.random.permutation(neg_samples)
    for i in range(n_splits):
        fn.write('Split '+str(i+1)+':\n')
        ps = psams[num_samples_per_split*i : num_samples_per_split*(i+1)]
        ns = nsams[num_samples_per_split*i : num_samples_per_split*(i+1)]
        sams = np.concatenate([ps, ns])
        sams = np.random.permutation(sams)
        labs = []
        fn.write('Samples:'+'\n')
        for sam in sams:
            lab = map_sam_to_lab[sam]
            fn.write("{ stimulus: 'img/split"+str(i+1)+"/"+'_'.join(sam.split('/')[-4:])+"', data: { part: 'split"+str(i+1)+"', correct_response: '"+map_sam_to_lab[sam]+"'}, correct_key: %d }\n" % (78 if lab == 'no' else 89))
            labs.append(lab)
        labs = np.asarray(labs)
        split_samples.append(sams)
        split_labels.append(labs)

    fn.close()
    return split_samples, split_labels
