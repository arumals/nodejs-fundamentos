var Robot = require('./modulos/robot');

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