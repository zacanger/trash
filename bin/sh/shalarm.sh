#!/bin/bash

time="$1"
command="$2"
trig=0

while [ $trig = 0 ]; do
  if [ "$(date +%R)" = $time  ]; then
    $command
    trig=1
  else
    sleep 5
  fi
done
exit

