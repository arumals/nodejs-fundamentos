var roberto = {
    nombre : "Roberto",
    apellido : "Buena",
    edad : 27,
    nombreCompleto : function () {
        return this.nombre + ' ' + this.apellido;
    },
    casado : true,
    direccion : {
        calle : "La Calle de La Mision",
        numero : 145,
        ciudad : "Bogota",
        pais : "Colombia"
    }
}

console.log(roberto.nombreCompleto());