FROM node:13-alpine

WORKDIR /home/app/server

ENV NODE_ENV production

COPY env.json

COPY package*.json .

COPY script.sh

RUN yarn install

COPY . /home/app/server

EXPOSE 5000

CMD ["./script.sh"]
