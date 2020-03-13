#!/usr/bin/env python3.7
import weaviate, csv

client = weaviate.Client("http://weaviate.com:8080")
client.create_schema("./schema.json")

# Set the individual data
rowCounter = 0
for row in csv.reader(open("data.csv", "rU"), delimiter=','):
  if rowCounter == 0:
    rowCounter += 1
    continue
  elif len(row) == 7 and row[6] != '':
    print("ADD: ", row[5])
    client.create_thing({
        "year": int(row[0]),
        "volume": int(row[1]),
        "issue": int(row[2]),
        "doi": str(row[3]),
        "journal": str(row[4]),
        "title": str(row[5]),
        "abstract": str(row[6])
    }, "Article")
