const PROTO_PATH = __dirname + '/helloworld.proto';
const grpc = require('grpc');
const hello_proto = grpc.load(PROTO_PATH).helloworld;
const fs = require('fs');


const credentials = grpc.credentials.createSsl(
    fs.readFileSync('./certs/ca.crt'), 
    fs.readFileSync('./certs/client.key'), 
    fs.readFileSync('./certs/client.crt')
);

const client = new hello_proto.Greeter(
    'localhost:50051',
    credentials
);

let user;

if (process.argv.length >= 3) {
    user = process.argv[2];
} else {
    user = 'World';
}

client.sayHello({ name: user }, (err, response) => {
    console.log('Greeting:', response.message);
});