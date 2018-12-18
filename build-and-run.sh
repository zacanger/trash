#!/bin/sh

commit_hash=`git rev-parse --short=10 HEAD`
docker build -t janedev/node-example:$commit_hash .
docker run -d -p 9999:9999 janedev/node-example:$commit_hash
