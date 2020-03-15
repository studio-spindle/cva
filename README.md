
# Creating Value Alliance

The Creating Value Alliance website. 

---

Project:

- [Next JS](https://nextjs.org/) - A React framework
- [Typescript](https://www.typescriptlang.org/) - Javascript that scales
- [Material UI](https://material-ui.com/) - React components for faster and easier web development
- [Docker](https://www.docker.com/) - Only used for spinning up the articles

## SSR

T.b.d.

## Development

To start developing your application run `yarn dev`. This starts the development server on `http://localhost:3000`.

Visit `http://localhost:3000` to view your application.

## Scientific papers (Articles)

The scientific papers are stored in a [knowledge graph](https://www.semi.technology/documentation/weaviate/current/about/philosophy.html). The tool used is [Weaviate](https://github.com/semi-technologies/weaviate). 

To run the Weaviate change the directory in your terminal to `./weavite`, and run:

```bash
docker-compose up
```

Once the download (+/- 1.6 GB) of the instance is done, your local Weaviate instance will install. This might take a while. Once it's done you can run it on `http://localhost:8080/v1/meta`.

## Docker

```sh
$ cd ./weaviate
# This is needed anytime the config or data changes
$ docker-compose build --no-cache
# You can use -d to run as deamon
$ docker-compose up -d
```
