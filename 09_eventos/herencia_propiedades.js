function Clase1(){
    this.prop1 = "a";
    this.prop2 = "b"
}

function Clase2(){
    Clase1.call(this);
    this.prop3 = "c";
}

var c1 = new Clase1();
var c2 = new Clase2();

console.log(c1);
console.log(c2);

