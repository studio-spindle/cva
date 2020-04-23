#!/bin/bash

##
# sets the variables
#
# Available variables are the keys in the json file. E.g., EMAIL_TO_1
#
##
cat env.json | eval $(cat env.json | jq -r '. | to_entries | .[] | .key + "=\"" + .value + "\""')

# serve yarn
yarn serve