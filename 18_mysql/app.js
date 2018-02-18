// cargar express como modulo
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

// generar nuestra app
var app = express();

// iniciar bodyparser para variables post
var urlencodedParser = bodyParser.urlencoded({
	extended: false
});

// iniciar body parser para variables json
var jsonParser = bodyParser.json();

// cuando se busque 'assets' se redirecciona a 'static'
app.use('/css', express.static(__dirname + '/static/css'));

// conexion sql
app.use('/', function(peticion, respuesta, siguiente) {

	var con = mysql.createConnection({
		host: 'localhost',
		user: 'test',
		password: 'test',
		database: 'test'
	})

	con.query('select * from matriculas', function(error, resultados){
		if(error) throw error;
		console.log(resultados);
	});

	siguiente()

});

// ruta para el home
app.get('/', function(peticion, respuesta) {
	respuesta.render('inicio.ejs');
});

// ruta para nuestra matricula con un id
app.get('/matricula/:id', function(peticion, respuesta) {
	respuesta.render('matricula.ejs', {
		id: peticion.params.id
	});
});

// ruta para crear una nueva matricula mediante post
app.post('/matriculaPost', urlencodedParser, function(peticion, respuesta) {
	respuesta.send('Recibido!');
	console.log(peticion.body.nombre);
	console.log(peticion.body.matricula);
});

// ruta para crear una nueva matricula mediante json
app.post('/matriculaJson', jsonParser, function(peticion, respuesta) {
	respuesta.send('Recibido!');
	console.log(peticion.body.nombre);
	console.log(peticion.body.matricula);
});



// acceder a la variable de entorno PUERTO o usar 3000 por default
var puerto = process.env.PUERTO || 3000;

// ejecutar listener en el puerto 3000
app.listen(puerto);