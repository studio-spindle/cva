
# Creating Value Alliance

The scientific papers (Articles) are stored in a [knowledge graph](https://www.semi.technology/documentation/weaviate/current/about/philosophy.html). The tool used is [Weaviate](https://github.com/semi-technologies/weaviate).

- [Building this application](#building-a-production-build)
- [Development](#development)
- [Deployment](#deployment)

## Building a production build

To start this application first build the client:

```bash
$ docker-compose build --no-cache

# run all the services
$ docker-compose up
```

_Note: Once the download (+/- 1.6 GB) of the instance is done, your local Weaviate instance will install. This might take a while. Once it's done you can run it on `http://localhost:8080/v1/meta`._
_Note: also anytime the config, data or client changes re-run previous command in the corresponding directory_

Now you can open the client in the browser window by opening `http://localhost:3000/` in your browser.

## Development

- User Interface: `./client`
- Server (for Mailchimp subscription): `./server`
- Articles (Weaviate): `./weaviate`

## Deployment

T.B.D.

.
