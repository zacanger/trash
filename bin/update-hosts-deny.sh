#!/usr/bin/env bash
set -e

# https://github.com/mitchellkrogza/Ultimate.Hosts.Blacklist
sudo mv /etc/hosts.deny /etc/hosts.deny.bak
sudo wget https://hosts.ubuntu101.co.za/hosts.deny -O /etc/hosts.deny
