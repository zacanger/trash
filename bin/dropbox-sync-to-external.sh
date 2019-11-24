#!/usr/bin/env bash

set -e

for dir in /media/z/*; do
  /usr/bin/rsync -az /home/z/Dropbox/ $dir/Dropbox/ --delete
done

sync
