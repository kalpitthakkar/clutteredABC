#!/usr/bin/env python
# Generate the stimulus videos for all images of the current rapid categorization experiment

import os
# import config
import subprocess
import shutil

# Greatest common denominator
def gcd(a, b): return gcd(b, a % b) if b else a

def generate_stimulus_videos(image_folder, video_folder, onset_times_ms, after_time_ms, stim_show_time_ms):
    # Determine FPS by largest common multiple of the used timings
    gctime_ms = reduce(gcd, onset_times_ms + [stim_show_time_ms, after_time_ms, 1000])
    fps = 1000 / gctime_ms
    print 'Encoding at %d FPS (%dms/frame)' % (fps, gctime_ms)
    # Prepare output path. Have to recreate tmp folder because we may need to restore
    # some fix frames overwritten by the lastpass
    root_path = os.path.dirname(os.path.realpath(__file__))
    mkfixframes_sh = os.path.join(root_path, 'mkfixframes.sh')
    work_path = os.path.join(root_path, 'tmp')
    if os.path.exists(work_path):
        shutil.rmtree(work_path)
    subprocess.call(mkfixframes_sh)
    # Determine conversion script name
    stim_sh = os.path.join(root_path, 'stim2video.sh')
    # Recursively walk over files
    for root, dirs, files in os.walk(image_folder):
        print 'Processing images in %s...' % root
        # Create target directory
        target_path = os.path.join(video_folder, os.path.relpath(root, image_folder))
        if not os.path.isdir(target_path):
            os.makedirs(target_path)
        # Convert all files
        for file in files:
            fn_full = os.path.join(root, file)
            (file_base, ext) = os.path.splitext(file)
            if ext.lower() != '.png':
                print 'Ignoring non-.png file ', fn_full
                continue
            target_path_for_file = os.path.join(target_path, file_base)
            print '%s -> %s...' % (fn_full, target_path_for_file)
            if not os.path.isdir(target_path_for_file):
                os.makedirs(target_path_for_file)
            for fix_ms in onset_times_ms:
                out_fn = os.path.join(target_path_for_file, str(fix_ms)+'-'+str(stim_show_time_ms) + '.webm')
                # Skip if already converted
                if os.path.isfile(out_fn):
                    continue
                cmd = [stim_sh, fn_full, out_fn, str(fix_ms), str(stim_show_time_ms), str(after_time_ms), str(fps)]
                print cmd
                subprocess.call(cmd)
            # Also keep a copy of the image in the video folder
            # shutil.copyfile(fn_full, os.path.join(target_path_for_file, 'stim' + ext))
            # We do not need to recreate the fix frames for every image because the number of replaced images will be the same

if __name__ == '__main__':
    onset_times_ms = [1000]
    after_time_ms = 0

    import glob
    input_image_paths = sorted(glob.glob('/opt/lampp/cnist-experiment/home/kalpit/cnist-try/vids/*'))
    #input_image_paths = ['/opt/lampp/cnist-experiment/home/kalpit/train/fast']
    #input_image_paths = sorted(glob.glob('/opt/lampp/pathfinder-experiment/home/kalpit/pfind-new/vids/*'))
    #input_image_paths = ['/opt/lampp/pathfinder-experiment/home/kalpit/train/fast']

    output_paths = sorted(glob.glob('/opt/lampp/cnist-experiment/home/kalpit/cnist-try/vids/*'))
    #output_paths = ['/opt/lampp/cnist-experiment/home/kalpit/train/fast']
    #output_paths = sorted(glob.glob('/opt/lampp/pathfinder-experiment/home/kalpit/pfind-new/vids/*'))
    #output_paths = ['/opt/lampp/pathfinder-experiment/home/kalpit/train/fast']

    stim_show_times = [800, 1200, 1600]
    for stm in stim_show_times:
        [generate_stimulus_videos(
            p, o, onset_times_ms, after_time_ms, stim_show_time_ms=stm)  # MAKE SURE STIM_SHOW_TIME = SETTINGS.PY
            for p, o in zip(input_image_paths, output_paths)]
