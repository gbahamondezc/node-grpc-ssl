### [GRPC](https://grpc.io/) -  NodeJS + Docker Sample, SSL Certs
This is a basic  sample  of **client -> server**  communication   using GRPC protocol with NodeJS.

- Certificates generation 
- Secure connection with SSL
- Dockerization


##### Instructions
As very first step  you must clone this repo and cd into the root project folder

#### Install dependencies
```
$ npm install
```

##### Generate SSL Certificates (certificates will be generated at ./certs)
```
$ npm run gen:certs
```

##### Running GRPC Server
```
$ npm run develop
```

##### Running client (other terminal until you have the server running)
```
$ node client.js
```

##### Build Docker image
```
$ docker-compose build
```


##### Run docker image (just server)
```
$ docker-compose up
```