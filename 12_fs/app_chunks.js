var fs = require('fs');

// path al archivo origen
var archivo_origen = __dirname + '/texto.txt';

// tamaño del chunk
var tamano_chunk = 16 * 1024;

// definir el stream de lectura
var stream_lectura = fs.createReadStream( archivo_origen, {
	encoding : 'utf8',
	highWaterMark : tamano_chunk
});

// definir el archivo destino
var archivo_destino = __dirname + '/texto_destino.txt';

// crear stream de escritura
var stream_escritura = fs.createWriteStream( archivo_destino );

// emisor del stream de lectura
stream_lectura.on('data', function (chunk) {
	console.log(chunk.length);
	stream_escritura.write(chunk);
});