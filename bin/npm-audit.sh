#!/usr/bin/env bash

set -e

# Forked from
# https://github.com/launchdarkly/node-server-sdk/blob/master/scripts/better-audit.sh

# Processes the outut of `npm audit` and makes it more useful:
# For each vuln, checks the `path` fielld and extracts the flagged package
# (last element in path) and top dep that lead to it (first element in path).
# Sorts and dedupes.
# For each direct dep, checks where it comes from (prod, dev, peer).

# Depends on npm and jq.

read_packages() {
  in_category=$1
  jq -r ".${in_category} | keys | .[]" package.json 2>/dev/null || true
}

is_in_list() {
  item=$1
  shift
  for x in $@; do
    if [ "$item" == "$x" ]; then
      true
      return
    fi
  done
  false
}

prod_dependencies=$(read_packages dependencies)
dev_dependencies=$(read_packages devDependencies)
peer_dependencies=$(read_packages peerDependencies)

process_items() {
  flagged_runtime=0
  flagged_dev=0
  while read -r bad_package top_level_dep; do
    echo -n "flagged package \"$bad_package\", referenced via \"$top_level_dep\" "
    for category in prod_dependencies peer_dependencies dev_dependencies; do
      if is_in_list $top_level_dep ${!category}; then
        if [ "$category" == "dev_dependencies" ]; then
          echo "-- from \"$category\""
          flagged_dev=1
        else
          echo "-- from \"$category\" (RUNTIME) ***"
          flagged_runtime=1
        fi
        break
      fi
    done
  done
  echo
  if [ "$flagged_runtime" == "1" ]; then
    echo "At least one runtime dependency was flagged."
    echo "These must be fixed by updating package.json."
    echo "Do not use 'npm audit fix'."
    exit 1
  elif [ "$flagged_dev" == "1" ]; then
    echo "Only development dependencies were flagged."
    echo "You may safely run 'npm audit fix', which will"
    echo "fix these by adding overrides to package-lock.json."
  else
    echo "Congratulations! No dependencies were flagged by 'npm audit'."
  fi
}

echo "Running npm audit..."
echo

npm audit --json \
  | grep '"path":' \
  | sort \
  | uniq \
  | sed -n -e 's#.*"path": "\([^"]*\)".*#\1#p' \
  | awk -F '>' '{ print $NF,$1 }' \
  | sort \
  | uniq \
  | process_items
