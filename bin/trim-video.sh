#!/usr/bin/env bash

echo 'start (hh:mm:ss.0)'
read start
echo end
read end
echo input
read input
echo output
read outut

ffmpeg -ss "$start" -i "$input" -c copy -t "$end" "$output"
