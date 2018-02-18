// modulos/aleatorio.js

module.exports.numero = function () {
	console.log(Math.round(Math.random()*100000));
}

var nombres = ["Raul","Pedro","Juan","Alberto","Antonio","Erika","Alejandra","Isabel"];

module.exports.nombre = function(){
	indice_aleatorio = Math.floor(Math.random()*nombres.length);
	console.log(nombres[indice_aleatorio]);
}