// Modulo events
var events = require('events');

// Modulo util
var util = require('util');

// Todos los robots tienen un nombre
function Robot(nombre){
	this.nombre = nombre;
}

// Heredar los métodos de eventos en Robot
util.inherits(Robot,events);

// Todos los robots saludan
Robot.prototype.saludar = function(){
    console.log('Hola, mi nombre es ' + this.nombre);
    this.emit('saludar');
}

// Todos los robots caminan al frente
Robot.prototype.frente = function(){
    console.log(this.nombre + " camina hacia el frente");
    this.emit('frente');
}

// Todos los robots caminan hacia atras
Robot.prototype.atras = function(){
    console.log(this.nombre + " camina hacia atras");
    this.emit('atras');
}

var genialo = new Robot('Genialo');

genialo.on('frente',function(){
	console.log(this.nombre + ' da dos pasos al frente');
});

genialo.on('atras',function(){
	console.log(this.nombre + ' da dos pasos atras');
});

genialo.saludar();
genialo.frente();
genialo.atras();