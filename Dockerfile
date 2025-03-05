FROM node:18-alpine3.18
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/app

# Set up permissions for the app directory
RUN mkdir -p /opt/app && chown -R node:node /opt/app

USER node
COPY --chown=node:node . .
RUN yarn install
ENV PATH=/opt/app/node_modules/.bin:$PATH

RUN ["yarn", "build"]

EXPOSE 1337
