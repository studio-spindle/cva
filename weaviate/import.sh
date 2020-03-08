#!/bin/bash

# when using with Docker compose we need to sleep
echo "Wait for server to come live"
while [ "$RESPONSE" != "200" ]; do
    RESPONSE=$(curl --write-out %{http_code} --silent --output /dev/null http://weaviate.com:8080/v1/meta)
    echo $RESPONSE
    sleep 3
done

# Inform
echo "Importing $1"
./import.py
