#!/bin/sh

sudo systemd-resolve --flush-caches
sudo service network-manager restart
