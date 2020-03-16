
# Creating Value Alliance

The Creating Value Alliance website. 

---

## Client

```
$ cd ./client
# build the docker instance
$ docker build . -t cva
# run the docker container
$ docker run -p 3000:3000 cva
```

Now you can open the client in the browser window by opening `http://localhost:3000/` in your browser.

## Scientific papers (Articles)

The scientific papers are stored in a [knowledge graph](https://www.semi.technology/documentation/weaviate/current/about/philosophy.html). The tool used is [Weaviate](https://github.com/semi-technologies/weaviate).

## Docker

```sh
$ cd ./weaviate
# This is needed anytime the config or data changes
$ docker-compose build --no-cache
```

Once the download (+/- 1.6 GB) of the instance is done, your local Weaviate instance will install. This might take a while. Once it's done you can run it on `http://localhost:8080/v1/meta`.

```
# You can use -d to run as deamon
$ docker-compose up -d
```
