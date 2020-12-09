var express = require('express');
var app = express();
var mysql = require('mysql');
const cors = require('cors');
var path = require('path');
//host : '172.18.0.2',
var conexion= mysql.createConnection({
    host : 'localhost',
    database : 'Practica1',
    user : 'root',
    password : '1234',
    port: 3306


});

conexion.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conexion.threadId);
});


app.set('port',3003);
app.set('json spaces',2);
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.get('/auth',(req,res)=>{
	let Respuesta = {
		Nombre: 'Hola Mundo'
	}
	res.json(Respuesta);
});


app.post('/auth',(req,res)=>{
	const {email, pass} = req.body;
	if(email && pass){
		console.log("Se busca->" + email);
		console.log("password->" + pass)
		
		conexion.query('SELECT * FROM Cliente WHERE correo = ? AND Password = ?', [email, pass], function(error, result, fields) {
			if (result.length > 0) {
				
				const myString = JSON.stringify(result);
				var resultados = myString.split(',');
				var user1 =  parseInt(resultados[0].split(':')[1]);
				var nombre = resultados[1].split(':')[1].replace('\"','').replace('\"','');
				var tips = resultados[4].split(':')[1].replace('\"','').replace('\"}]','');			
				res.json({"msg":true,"tipo":tips,"user":user1,"name":nombre});
			} else {
				res.json({"msg":false,"tipo":"error","user":0,"name":"error"});
			}			
		});
	}else{
		res.json({"msg":false,"tipo":"error","user":0,"name":"error"});
	}
});

app.post('/regis',(req,res)=>{
	const {nombre, email, pass,tipo} = req.body;
	if(nombre && email && pass && tipo){
		conexion.query('SELECT * FROM Cliente WHERE correo = ? ', [email], function(error, result, fields) {
			if (result.length > 0) {
				res.json({"msg":false,"tipo":"error","user":0,"name":"error"});				
			} else {
				conexion.query('insert into Cliente (Nombre,Password,correo,tipo) Values (?,?,?,?)',[nombre, pass,email,tipo]);
				let elnuevouser = 0;
				conexion.query('SELECT * FROM Cliente WHERE correo = ? ', [email], function(error, result, fields) {
					const myString = JSON.stringify(result);
					var resultados = myString.split(',');
					elnuevouser =  parseInt(resultados[0].split(':')[1]);
					res.json({"msg":true,"tipo":tipo,"user":elnuevouser,"name":nombre});
				});
				
			}			
		});
	}else{
		res.json({"msg":false,"tipo":"error","user":0,"name":"error"});
	}
});

app.listen(app.get('port'),()=>{
	console.log('Server on port 3003');
});
