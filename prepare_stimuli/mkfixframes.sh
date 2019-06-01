#!/bin/bash
# Create symlink-copies of fixation frame to be read by ffmpeg video generation

targetpath=${1:-tmp}

if [ ! -h "$targetpath/img1000.png" ]; then
	mkdir "$targetpath/"
	for i in $(seq -w 1000 2000); do
		ln -s $(pwd)/fix.png "$targetpath/img${i}.png"
	done
else
	echo "Fix frames already exist."
fi


