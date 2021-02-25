console.log("Ejecutando server lab10");


const http = require('http');

const requestHandler = require('./routes');

const server = http.createServer( requestHandler );

server.listen(3000);