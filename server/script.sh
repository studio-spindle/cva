#!/bin/bash

# sets the variables
cat env.json | eval $(cat env.json | jq -r '. | to_entries | .[] | .key + "=\"" + .value + "\""')

# serve yarn
yarn serve