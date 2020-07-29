const http = require('http');

const server = http.createServer();

server.listen('localhost:5050', () => console.log('server start'));
