#!/usr/bin/env bash

docker run -v "$PWD:/mnt" koalaman/shellcheck --shell=bash **/*.sh
