// Llamar modulo fs.
var fs = require('fs');

// Llamar de manera sincrona.
fs.readFile(__dirname + '/texto.txt', 'utf8', function(error, datos){

	// Imprimir el texto
	console.log(datos);

});

console.log('Script completado');