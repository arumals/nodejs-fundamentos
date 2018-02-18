// llamamos a la libreria http
var http = require('http');

// llamamos a la libreria fs
var fs = require('fs');

var titulo = 'Este es el titulo de la pagina.';
var parrafo = 'Este es el parrafo de la pagina.';

// creamos nuestro server
var miServidor = http.createServer((peticion,respuesta) => {
	respuesta.writeHead(200,{'Content-Type' : 'text/html'});
	var html = fs.readFileSync(__dirname + '/hola_mundo.tpl')
		.toString()
		.replace('%titulo%',titulo)
		.replace('%parrafo%',parrafo);
	respuesta.end(html);
});

// inicializar el servidor
miServidor.listen(1111,'127.0.0.1');