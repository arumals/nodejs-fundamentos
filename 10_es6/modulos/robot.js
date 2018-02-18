'use strict';

let events = require('events');

module.exports = class Robot extends events {

    constructor(nombre){
    	super();
        this.nombre = nombre;
    }

    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre}.`);
        this.emit('saludar');
    }

    frente(){
        console.log(`${this.nombre} camina al frente.`);
        this.emit('frente');
    }

    atras(){
        console.log(`${this.nombre} camina hacia atras.`);
        this.emit('atras');
    }

}
