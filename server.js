const PROTO_PATH = __dirname + '/helloworld.proto';
const grpc = require('grpc');
const hello_proto = grpc.load(PROTO_PATH).helloworld;
const fs = require('fs');


const sayHello = (call, callback) => {
    console.info('Calling method [sayHello]');
    callback(null, { message: 'Hello ' + call.request.name });
}

const server = new grpc.Server();


let credentials = grpc.ServerCredentials.createSsl(
    fs.readFileSync('./certs/ca.crt'), [{
    cert_chain: fs.readFileSync('./certs/server.crt'),
    private_key: fs.readFileSync('./certs/server.key')
}], true);


server.addService(hello_proto.Greeter.service, { sayHello: sayHello });
server.bind(`0.0.0.0:${process.env.SERVER_PORT}`, credentials);
server.start();
console.info('GRPC server started at port', process.env.SERVER_PORT);



