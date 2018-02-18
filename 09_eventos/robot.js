// cargamos la libreria de eventos
var eventos = require('events');

// creamos un nuevo manejador de eventos
var control_remoto = new eventos();

// cuando presionamos adelante
control_remoto.on('adelante',function(){
    console.log('El robot camina hacia el frente');
});

// cuando presionamos atras
control_remoto.on('atras',function(){
    console.log('El robot camina hacia atras');
});

// cuando ordenamos saludar

// el robot se detiene
control_remoto.on('saludar',function(){
	console.log('Detener robot.');
});

// el robot saluda
control_remoto.on('saludar',function(){
    console.log('El robot dice "Hola, soy Genialo"!');
});

// utilizar controles
control_remoto.emit('adelante');
control_remoto.emit('atras');
control_remoto.emit('saludar');