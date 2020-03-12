# base image
FROM node:latest

# set working directory
WORKDIR /app

EXPOSE 3000

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
COPY webpack.config.js /app/webpack.config.js
COPY .babelrc /app/.babelrc
COPY src /app/src
COPY public /app/public
RUN yarn install

# start app
CMD ["yarn", "run", "dev-server"]
# CMD ["./bin/docker-entrypo"]

# to build image and run container locally
# docker build -t react-app-image . && docker run -it --name react-app -p 8080:3000 react-app-image