FROM python:3.7

RUN pip3 install weaviate-client

COPY import.py import.py

COPY schema.json schema.json

COPY data.csv data.csv

COPY import.sh import.sh

RUN chmod +x import.py

RUN chmod +x import.sh

CMD ["./import.sh"]
