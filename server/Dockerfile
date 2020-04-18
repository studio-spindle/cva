FROM node:13-alpine

WORKDIR /home/app/server

ENV NODE_ENV production

COPY package*.json .

RUN yarn install

COPY . /home/app/server

EXPOSE 5000

CMD ["yarn", "serve"]
