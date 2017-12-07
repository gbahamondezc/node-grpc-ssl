FROM mhart/alpine-node:8.9.1

RUN apk add --no-cache make gcc g++ python
# Move packagejson to container in tmp folder
ADD package.json /tmp/package.json


# Installing dependencies
RUN cd /tmp && npm install

# Moving dependencies from tmp folder to project folder
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

# Setting project folder as workdir
WORKDIR /opt/app

# Adding project files to container project folder
ADD . /opt/app

EXPOSE 50051

CMD ["npm", "start"]