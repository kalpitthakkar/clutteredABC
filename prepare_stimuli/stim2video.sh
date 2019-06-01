#!/bin/bash
# Generate a .webm video from an input image for rapid presentation by adding frames of fix.png before and after

# go to script path
cd "$( dirname "${BASH_SOURCE[0]}" )"

# Parameter checks
# For Michele artifact vehicle experiment, use params example pretime 1100 'training_presentation_durations' = [500, 500, 200, 200, 100, 100] 'max_training_answer_time'] = 1500 fps = 100
if [ $# -lt 6 ]; then
	echo "Usage: $0 input_image output_video fix_time_ms stim_show_time_ms after_time_ms fps"
	echo "  e.g.: $0 scene.png scene.webm 1000 20 500 50"
	exit 1
fi

INIMG="$1"
OUTVID="$2"
FIXTIMEMS=$3
STIMTIMEMS=$4
AFTERTIMEMS=$5
FPS=$6

if [ ! -f "$INIMG" ]; then
	echo "Input file $INIMG not found."
	exit 1
fi

# Make sure fix point frames exist
if [ ! -h "tmp/img1000.png" ]; then
	./mkfixframes.sh
else
	echo "Fix frames prepared."
fi

# Calculate frame indices
FIXFRAMES=$((FIXTIMEMS * FPS / 1000))
AFTERFRAMES=$((AFTERTIMEMS * FPS / 1000))
STIMFRAMES=$((STIMTIMEMS * FPS / 1000))
NUMFRAMES=$((FIXFRAMES + STIMFRAMES + AFTERFRAMES))
STIMFRAMEA=1500
STIMFRAMEB=$((STIMFRAMEA + STIMFRAMES - 1))
STARTFRAME=$((STIMFRAMEA - FIXFRAMES))
echo "Using sequence from $STARTFRAME to $((STARTFRAME+NUMFRAMES-1)) with $STIMFRAMES stimulus frames from $STIMFRAMEA to $STIMFRAMEB."

# Put stimulus into sequence
IMGDIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
for i in $(seq -w $STIMFRAMEA $STIMFRAMEB); do
    rm -f $IMGDIR/tmp/img$i.png
    echo ln -s $(readlink -f $INIMG) $IMGDIR/tmp/img$i.png
    ln -s $(readlink -f $INIMG) $IMGDIR/tmp/img$i.png
done

# Delete previous
if [ -f "$OUTVID" ]; then
	echo "Removing previous output video $OUTVID."
	rm "$OUTVID"
fi

# Create video
echo ffmpeg -f image2 -framerate $FPS -start_number $STARTFRAME -i tmp/img%04d.png -c:v libvpx -b:v 650k -s 256x256 -r $FPS -vframes $NUMFRAMES "$OUTVID"
ffmpeg -f image2 -framerate $FPS -start_number $STARTFRAME -i tmp/img%04d.png -c:v libvpx -b:v 650k -s 256x256 -r $FPS -vframes $NUMFRAMES "$OUTVID"

