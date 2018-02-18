// Llamar modulo fs.
var fs = require('fs');

// Llamar de manera sincrona.
var texto = fs.readFileSync(__dirname + '/texto.txt', 'utf8');

// Imprimir el texto
console.log(texto);