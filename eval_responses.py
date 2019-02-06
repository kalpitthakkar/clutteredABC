import os, glob
import numpy as np
import sys
import matplotlib.pyplot as plt
from matplotlib.patches import Circle

def calculate_stats(response_dir, print_stats=True, rej_outlier_perc=0, hand='right'):
    files = glob.glob(os.path.join(response_dir, '*.csv'))

    results = []
    baseline = []
    ix1 = []
    ix2 = []
    nulls = []
    ehs = 0
    for fn in files:
        avg_response_time = 0
        true_classify = 0
        false_classify = 0
        with open(fn, 'r') as f:
            lines = f.readlines()
        head = lines[0]
        head = head.strip().split(',')
        header_to_idx = {x[1:-1]: i for i, x in enumerate(head)}
        if 'rtime' in header_to_idx.keys():
            rtime = lines[1].strip().split(',')[header_to_idx['rtime']][1:-1]
            if not (rtime == '1600'):
                ehs += 1
                print rtime, ehs
                continue
        #else:
        #    if hand == 'left':
        #        continue
        #if 'rt_hand' in header_to_idx.keys():
        #    num_rt_hands += 1
        filter_lines = []
        for line in lines[1:]:
            line = line.strip().split(',')
            part = line[header_to_idx['part']]
            if 'base' in part:
                filter_lines.append(line)
            if 'lev1' in part:
                filter_lines.append(line)
            if 'lev2' in part:
                filter_lines.append(line)
        bavg = 0; btrue = 0; bfalse = 0; nb = 0
        i1avg = 0; i1true = 0; i1false = 0; ni1 = 0
        i2avg = 0; i2true = 0; i2false = 0; ni2 = 0
        subid = filter_lines[0][header_to_idx['SubjectID']][1:-1]
        num_null = 0
        for line in filter_lines:
            stim = line[header_to_idx['stimulus']][1:-1]
            res_time = line[header_to_idx['rt']][1:-1]
            res_true = (1 if line[header_to_idx['correct']][1:-1] == 'true' else 0)
            res_false = (0 if line[header_to_idx['correct']][1:-1] == 'true' else 1)
            if 'baseline' in stim:
                #bavg += int(res_time)
                if not (res_time == 'null'):
                    btrue += res_true
                    bfalse += res_false
                else:
                    num_null += 1
                nb += 1
            if 'ix1' in stim:
                #i1avg += int(res_time)
                if not (res_time == 'null'):
                    i1true += res_true
                    i1false += res_false
                else:
                    num_null += 1
                ni1 += 1
            if 'ix2' in stim:
                #i2avg += int(res_time)
                if not (res_time == 'null'):
                    i2true += res_true
                    i2false += res_false
                else:
                    num_null += 1
                ni2 += 1
            #avg_response_time += int(res_time)
            true_classify += res_true
            false_classify += res_false
        if num_null <= 40:
            baseline.append((subid, bavg * 1. / nb, btrue, bfalse))
            ix1.append((subid, i1avg * 1. / ni1, i1true, i1false))
            ix2.append((subid, i2avg * 1. / ni2, i2true, i2false))
            results.append((subid, avg_response_time * 1. / len(filter_lines), true_classify, false_classify))
        nulls.append(num_null)

    if print_stats:
        for b, i1, i2, res in zip(baseline, ix1, ix2, results):
            print "-----------------------------------------------------"
            print "Subject ID: " + res[0].split('-')[-2]
            print "Baseline Performance: "
            print "======================"
            print "Average Response Time: " + str(b[1]) + " ms"
            print "Number of correct responses: " + str(b[2]) + " on " + str(b[2] + b[3])
            print "Number of incorrect responses: " + str(b[3]) + " on " + str(b[2] + b[3])
            print "ix1 Performance: "
            print "======================"
            print "Average Response Time: " + str(i1[1]) + " ms"
            print "Number of correct responses: " + str(i1[2]) + " on " + str(i1[2] + i1[3])
            print "Number of incorrect responses: " + str(i1[3]) + " on " + str(i1[2] + i1[3])
            print "ix2 Performance: "
            print "======================"
            print "Average Response Time: " + str(i2[1]) + " ms"
            print "Number of correct responses: " + str(i2[2]) + " on " + str(i2[2] + i2[3])
            print "Number of incorrect responses: " + str(i2[3]) + " on " + str(i2[2] + i2[3])
            print "Overall Performance: "
            print "======================"
            print "Average Response Time: " + str(res[1]) + " ms"
            print "Number of correct responses: " + str(res[2]) + " on " + str(res[2] + res[3])
            print "Number of incorrect responses: " + str(res[3]) + " on " + str(res[2] + res[3])
            print "-----------------------------------------------------"
    print "----------------------------------------------"
    print "Avg baseline correct responses: " + str(np.mean([x[2] for x in baseline]))
    print "Avg baseline incorrect responses: " + str(np.mean([x[3] for x in baseline]))
    print "====================="
    print "Avg ix1 correct responses: " + str(np.mean([x[2] for x in ix1]))
    print "Avg ix1 incorrect responses: " + str(np.mean([x[3] for x in ix1]))
    print "====================="
    print "Avg ix2 correct responses: " + str(np.mean([x[2] for x in ix2]))
    print "Avg ix2 incorrect responses: " + str(np.mean([x[3] for x in ix2]))
    print "====================="
    print "----------------------------------------------"

    if rej_outlier_perc > 0:
        sub_map = {}
        for i, res in enumerate(results):
            sub_map[res[0]] = i
        results = sorted(results, key=lambda val: val[2]*1./(val[2]+val[3]))
        accs = []
        for res in results:
            accs.append(res[2]*1./(res[2]+res[3]))
        mu = np.mean(accs)
        sigma = np.std(accs)
        new_results = []
        for i, res in enumerate(results):
            if mu - 2 * sigma < accs[i] and accs[i] < mu + 2 * sigma:
                new_results.append(res)

        #num_reject = np.int32(np.ceil(len(results) * rej_outlier_perc / 100.))
        #new_results = results[num_reject:-num_reject]

        new_baseline = []
        new_ix1 = []
        new_ix2 = []
        for res in new_results:
            idx = sub_map[res[0]]
            new_baseline.append(baseline[idx])
            new_ix1.append(ix1[idx])
            new_ix2.append(ix2[idx])
        return new_results, new_baseline, new_ix1, new_ix2

    return results, baseline, ix1, ix2

def plot_rt_circle_vis(stat_arr, perf_type="Baseline"):
    num_samples = (stat_arr[0][2] + stat_arr[0][3])
    X = [num_samples*(i+1) for i in range(len(stat_arr))]

    fig = plt.figure(figsize=(20, 20))
    fig.suptitle(perf_type + ' Performance of Subjects')
    ax = fig.add_subplot(111)
    ax.set_aspect('equal')

    for i, val in enumerate(stat_arr):
        rtrue = val[2] * 4. / 10.
        rfalse = val[3] * 4. / 10.
        ycoord = val[1] * 1. / 10.
        circ_obj_true = Circle((X[i], ycoord), rtrue, facecolor=(0, 0, 1, 0.5))
        circ_obj_false = Circle((X[i], ycoord), rfalse, facecolor=(1, 0, 0, 0.5))

        ax.add_patch(circ_obj_true)
        ax.add_patch(circ_obj_false)

    ax.set_xlabel('Subject IDs')
    ax.set_ylabel('Average Response times')
    ax.set_xticks(X)
    ax.set_xticklabels([x[0].split('-')[-1] for x in stat_arr], rotation=90)
    ax.set_xlim([0, (len(stat_arr) + 1) * num_samples])
    ax.set_ylim([0, np.amax([x[1] for x in stat_arr]) * 1. / 10. + num_samples])

    ax.legend([circ_obj_true, circ_obj_false], ['size ~ n(correct)', 'size ~ n(incorrect)'])

    plt.show()

def plot_rt_vs_accuracy(baseline, ix1, ix2, results):
    num_samples = 50
    X = [num_samples*(i+1) for i in range(len(baseline))]

    fig = plt.figure(figsize=(50, 20))
    fig.suptitle('RT vs accuracy plot for subjects')

    arrs = [baseline, ix1, ix2, results]
    arrnames = ['baseline', 'ix1', 'ix2', 'overall']
    for j, stat_arr in enumerate(arrs):
        ax = fig.add_subplot(2, 2, j+1)
        ax.set_title(arrnames[j])

        ax.set_xlabel('Average Response Times')
        ax.set_ylabel('Accuracy')
        ax.set_xlim([0, 300])
        ax.set_ylim([0, 110])

        X = []; y = []
        for i, val in enumerate(stat_arr):
            ntrue = val[2]
            nfalse = val[3]
            rt = val[1] * 1. / 10.
            y.append(ntrue * 100. / (ntrue + nfalse))
            X.append(rt)
            y = [x for _,x in sorted(zip(X, y))]
            X = sorted(X)
        out = ax.plot(X, y, 'o-', markersize=4)

    plt.show()

def plot_difficulty_vs_accuracy(baseline, ix1, ix2):
    X = [10, 20, 30]
    fig = plt.figure(figsize=(20, 20))
    fig.suptitle('Difficulty vs accuracy plot for subjects')
    arrs = [baseline, ix1, ix2]
    arrnames = ['baseline', 'ix1', 'ix2', 'overall']

    for i in range(len(baseline)):
        y = []
        ax = fig.add_subplot(2,len(baseline)/2,i+1)
        ax.set_xticks(X)
        ax.set_xticklabels(arrnames)
        ax.set_xlabel('Difficulty Level')
        ax.set_ylabel('Accuracy')
        ax.set_xlim([0, 50])
        ax.set_ylim([0, 110])
        ax.set_title(baseline[i][0].split('-')[-1])

        for j, stat_arr in enumerate(arrs):
            ntrue = stat_arr[i][2]
            nfalse = stat_arr[i][3]
            y.append(ntrue * 100. / (ntrue + nfalse))
            y = [x for _,x in sorted(zip(X, y))]
            X = sorted(X)
        out = ax.plot(X, y, 'o-', markersize=4)

    plt.show()

def plot_average_accuracy_with_error(baseline, ix1, ix2):
    X = [10, 20, 30]
    fig = plt.figure(figsize=(20, 20))
    fig.suptitle('[CLUTTERED NIST]\nAverage [X] across subjects with error bar')
    arrs = [baseline, ix1, ix2]
    arrnames = ['baseline', 'ix1', 'ix2']
    ax1 = fig.add_subplot(1,1,1)

    vals = []
    errs = []
    for j, stat_arr in enumerate(arrs):
        accs = []

        for i, val in enumerate(stat_arr):
            ntrue = val[2]
            nfalse = (val[3] if val[3] else 1)
            accs.append(ntrue * 100. / (ntrue + nfalse))
        accs = np.asarray(accs)
        vals.append(np.mean(accs))
        errs.append(np.std(accs)/np.sqrt(len(accs)))

    ax1.set_xticks(X)
    ax1.set_xticklabels(arrnames)
    ax1.set_xlabel('Difficulty Level')
    ax1.set_ylabel('Accuracy (mean +/- std)')
    ax1.set_xlim([0, 50])
    ax1.set_ylim([0, 110])
    ax1.set_title('[X] = accuracy')

    out1 = ax1.errorbar(X, vals, yerr=errs, capsize=3, marker='s')

    '''
    ax2 = fig.add_subplot(1,2,2)

    vals = []
    errs = []
    for j, stat_arr in enumerate(arrs):
        rts = []

        for i, val in enumerate(stat_arr):
            rt = val[1]
            rts.append(rt)
        rts = np.asarray(rts)
        vals.append(np.mean(rts))
        errs.append(np.std(rts)/np.sqrt(len(rts)))

    ax2.set_xticks(X)
    ax2.set_xticklabels(arrnames)
    ax2.set_xlabel('Difficulty Level')
    ax2.set_ylabel('Response Times (mean +/- std)')
    ax2.set_xlim([0, 50])
    ax2.set_ylim([0, max(vals) + 100])
    ax2.set_title('[X] = response times')

    out1 = ax2.errorbar(X, vals, yerr=errs, capsize=3, marker='s')

    arrs = [baseline[1], ix1[1], ix2[1]]
    arrnames = ['baseline', 'ix1', 'ix2']

    vals = []
    errs = []
    for j, stat_arr in enumerate(arrs):
        accs = []

        for i, val in enumerate(stat_arr):
            ntrue = val[2]
            nfalse = val[3]
            accs.append(ntrue * 100. / (ntrue + nfalse))
        accs = np.asarray(accs)
        vals.append(np.mean(accs))
        errs.append(np.std(accs)/np.sqrt(len(accs)))

    out2 = ax1.errorbar(X, vals, yerr=errs, capsize=3, marker='s')

    vals = []
    errs = []
    for j, stat_arr in enumerate(arrs):
        rts = []

        for i, val in enumerate(stat_arr):
            rt = val[1]
            rts.append(rt)
        rts = np.asarray(rts)
        vals.append(np.mean(rts))
        errs.append(np.std(rts)/np.sqrt(len(rts)))

    ax2.set_ylim([0, max(vals) + 100])
    out2 = ax2.errorbar(X, vals, yerr=errs, capsize=3, marker='s')

    plt.legend([out1, out2], ['right', 'left'])
    '''
    plt.show()

def plot_acc_with_rtbins_scratch(response_dir, num_bins=5, reject_percentile=5):
    files = glob.glob(os.path.join(response_dir, '*.csv'))

    baseline = {}
    ix1 = {}
    ix2 = {}
    for fn in files:
        with open(fn, 'r') as f:
            lines = f.readlines()
        head = lines[0]
        head = head.strip().split(',')
        header_to_idx = {x[1:-1]: i for i, x in enumerate(head)}
        filter_lines = []
        for line in lines[1:]:
            line = line.strip().split(',')
            part = line[header_to_idx['part']]
            if 'split' in part:
                filter_lines.append(line)
        subid = filter_lines[0][header_to_idx['SubjectID']][1:-1]
        baseline[subid] = []
        ix1[subid] = []
        ix2[subid] = []
        for line in filter_lines:
            stim = line[header_to_idx['stimulus']][1:-1]
            res_time = int(line[header_to_idx['rt']][1:-1])
            if res_time > 6000:
                res_time = 6000
            res_true = (1 if line[header_to_idx['correct']][1:-1] == 'true' else 0)
            res_false = (0 if line[header_to_idx['correct']][1:-1] == 'true' else 1)
            if 'baseline' in stim:
                baseline[subid].append((res_time, res_true, res_false))
            if 'ix1' in stim:
                ix1[subid].append((res_time, res_true, res_false))
            if 'ix2' in stim:
                ix2[subid].append((res_time, res_true, res_false))

    arrs = [baseline, ix1, ix2]
    arrnames = ['baseline', 'ix1', 'ix2']

    minrt = 0.0; maxrt = 6000.0
    num_limits = 8                          # num_buckets = num_limits - 1
    buck_limits = np.linspace(minrt, maxrt, num=num_limits, endpoint=True)

    buck_acc_means = []
    buck_acc_errs = []
    for j, stat_arr in enumerate(arrs):
        buck_vals = [{} for _ in range(num_limits-1)]
        for i in range(num_limits-1):
            for k,v in stat_arr.iteritems():
                c = 0
                nc = 0
                for val in v:
                    rt = val[0]
                    if i == num_limits-2:
                        if rt >= buck_limits[i] and rt <= buck_limits[i+1]:
                            c += val[1]
                            nc += val[2]
                    else:
                        if rt >= buck_limits[i] and rt < buck_limits[i+1]:
                            c += val[1]
                            nc += val[2]
                if c == 0 and nc == 0:
                    buck_vals[i][k] = 0
                else:
                    buck_vals[i][k] = c * 1. / (c + nc)
        buck_acc_means.append([np.mean([v for k,v in x.iteritems()]) for x in buck_vals])
        buck_acc_errs.append([np.std([v for k,v in x.iteritems()])/np.sqrt(len([v for k,v in x.iteritems()])) for x in buck_vals])

    print buck_acc_means
    print buck_acc_errs

    fig = plt.figure(figsize=(10,10))
    ax = fig.add_subplot(111)
    ax.set_xlabel('Response Times (ms)')
    ax.set_ylabel('Accuracy (mean +/- err) normalized to 0-1')
    colors = ['red', 'blue', 'green']

    leg_artists = []
    X = [(x+y)/2. for x,y in zip(buck_limits[:-1], buck_limits[1:])]
    for i in range(3):
        y = buck_acc_means[i]
        ye = buck_acc_errs[i]
        out = ax.errorbar(X, y, capsize=2, color=colors[i])
        ax.plot(X, y, 's', color=colors[i])
        leg_artists.append(out)

    ax.set_xticks(buck_limits[:-1])
    ax.set_ylim([0, 1])
    ax.grid(True)
    ax.legend(leg_artists, arrnames)
    plt.show()

def plot_acc_with_rtbins_precomputed(baseline, ix1, ix2):
    arrs = [baseline, ix1, ix2]
    arrnames = ['baseline', 'ix1', 'ix2']

    minrt = [100000, 100000, 100000]
    maxrt = [-1, -1, -1]
    for i, arr in enumerate(arrs):
        for val in arr:
            if val[1] > maxrt[i]:
                maxrt[i] = val[1]
            if val[1] < minrt[i]:
                minrt[i] = val[1]
    print maxrt, minrt

    minrt = min(minrt)
    maxrt = max(maxrt)
    num_limits = 4                          # num_buckets = num_limits - 1
    buck_limits = np.linspace(minrt, maxrt, num=num_limits, endpoint=True)
    print buck_limits

    buck_acc_means = []
    buck_acc_errs = []
    num_samples = []
    for j, stat_arr in enumerate(arrs):
        buck_vals = []
        for i in range(num_limits-1):
            accs = []
            for val in stat_arr:
                rt = val[1]
                if i == num_limits-2:
                    if rt >= buck_limits[i] and rt <= buck_limits[i+1]:
                        accs.append(val[2] * 1. / (val[2] + val[3]))
                else:
                    if rt >= buck_limits[i] and rt < buck_limits[i+1]:
                        accs.append(val[2] * 1. / (val[2] + val[3]))
            num_samples.append(len(accs))
            buck_vals.append([np.mean(accs), (np.percentile(accs,25), np.percentile(accs,75))])
        buck_acc_means.append([x[0] for x in buck_vals])
        buck_acc_errs.append([x[1] for x in buck_vals])

    fig = plt.figure(figsize=(10,10))
    ax = fig.add_subplot(111)
    ax.set_xlabel('Response Times (ms)')
    ax.set_ylabel('Accuracy (mean +/- err) normalized to 0-1')
    colors = ['red', 'blue', 'green']

    leg_artists = []
    X = [(x+y)/2. for x,y in zip(buck_limits[:-1], buck_limits[1:])]
    for i in range(3):
        y = buck_acc_means[i]
        ye = buck_acc_errs[i]
        print y, ye
        out = ax.errorbar(X, y, color=colors[i])
        ax.plot(X, y, 's', color=colors[i])
        leg_artists.append(out)

    xticks = np.concatenate([buck_limits[:-1], X])
    print X, xticks
    ax.set_xticks(xticks)
    ax.set_ylim([0.45, 1])
    ax.grid(True)
    ax.legend(leg_artists, arrnames)

    fig = plt.figure(figsize=(10,10))
    ax = fig.add_subplot(111)
    for i in range(3):
        y = num_samples[i]
        #X =

    plt.show()

if __name__ == '__main__':
    response_dir = sys.argv[1]
    results, baseline, ix1, ix2 = calculate_stats(response_dir, print_stats=False,
            rej_outlier_perc=5)
    #results_l, baseline_l, ix1_l, ix2_l = calculate_stats(response_dir, print_stats=False,
    #        rej_outlier_perc=5, hand='left')
    print len(results)#, len(results_l)

    #plot_rt_circle_vis(baseline, perf_type="Baseline")
    #plot_rt_circle_vis(ix1, perf_type="ix1")
    #plot_rt_circle_vis(ix2, perf_type="ix2")
    #plot_rt_circle_vis(results, perf_type="Overall")

    #plot_rt_vs_accuracy(baseline, ix1, ix2, results)
    #plot_difficulty_vs_accuracy(baseline, ix1, ix2)

    #plot_average_accuracy_with_error([baseline_r, baseline_l], [ix1_r, ix1_l], [ix2_r, ix2_l])
    plot_average_accuracy_with_error(baseline, ix1, ix2)

    #plot_acc_with_rtbins_scratch(response_dir)
    #plot_acc_with_rtbins_precomputed(baseline, ix1, ix2)
