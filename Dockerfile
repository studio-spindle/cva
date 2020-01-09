FROM node:13-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

# Docker’s caching mechanism
# Docker will check to see if it has a layer cached for that particular instruction.
# If we change package.json, this layer will be rebuilt, but if we don’t,
# this instruction will allow Docker to use the existing image layer and skip reinstalling our node modules.
COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "node", "app.js" ]
