// llamamos a la libreria http
var http = require('http');

// llamamos a la libreria fs
var fs = require('fs');

// contenido
var archivo_json = "";

// creamos nuestro server
var miServidor = http.createServer((peticion,respuesta) => {

	respuesta.writeHead(200,{'Content-Type' : 'text/html'});

	var html = fs.readFileSync(__dirname + '/hola_mundo.tpl').toString();

	switch(peticion.url){
		case "/":
		case "/inicio":
			archivo_json = '/inicio.json';
		break;
		case "/contacto":
			archivo_json = '/contacto.json';
		break;
		default:
			archivo_json = '/404.json';
		break;
	}

	var comodines = JSON.parse(fs.readFileSync(__dirname + archivo_json)).comodines;

	comodines.forEach(function(comodin){
		html = html.replace(comodin.nombre,comodin.valor);
	});

	respuesta.end(html);

});

// inicializar el servidor
miServidor.listen(1111,'127.0.0.1');