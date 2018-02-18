var http = require('http');

var miServidor = http.createServer((peticion, respuesta) => {
	respuesta.writeHead(200, { 'Content-Type' : 'text/plain' });
	respuesta.end('Adios mundo!');
});

miServidor.listen(1111,'127.0.0.1');