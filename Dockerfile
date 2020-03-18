# base image
FROM node:13.8.0

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