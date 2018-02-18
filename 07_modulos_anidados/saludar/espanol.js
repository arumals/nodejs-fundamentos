// saludar/espanol.js
var configuracion = require('./configuracion.json');

var saludar = function () {
	console.log(configuracion.espanol);
}

module.exports = saludar;