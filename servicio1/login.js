var express = require('express');
var app = express();
var mysql = require('mysql');
const cors = require('cors');
var path = require('path');
//host : '172.18.0.2',
var conexion= mysql.createConnection({
    host : '172.18.0.2',
    database : 'ProyectoSA',
    user : 'root',
    password : 'grupo13',
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


app.post('/authProveedor',(req,res)=>{
	const {email, pass} = req.body;
	if(email && pass){
		console.log("Se busca->" + email);
		console.log("password->" + pass)
		
		conexion.query('SELECT * FROM Proveedor WHERE email = ? AND password = ?', [email, pass], function(error, result, fields) {
			if (result.length > 0) {
				
				const myString = JSON.stringify(result);
				var resultados = myString.split(',');
				var user1 =  parseInt(resultados[0].split(':')[1]);
				var nombre = resultados[1].split(':')[1].replace('\"','').replace('\"','');
				//console.log("RRR*****->" + resultados);

				res.json({"msg":true,"user":user1,"name":nombre});
				
			} else {
				res.json({"msg":false,"user":0,"name":"error"});
				//res.json({"msg":false});
			}			
		});
	}else{
		res.json({"msg":false,"tipo":"error","user":0,"name":"error"});
	}
});

app.post('/authCliente',(req,res)=>{
	const {email, pass} = req.body;
	if(email && pass){
		console.log("Se busca->" + email);
		console.log("password->" + pass)
		
		conexion.query('SELECT * FROM Cliente WHERE email = ? AND password = ?', [email, pass], function(error, result, fields) {
			if (result.length > 0) {
				
				const myString = JSON.stringify(result);
				var resultados = myString.split(',');
				var user1 =  parseInt(resultados[0].split(':')[1]);
				var nombre = resultados[1].split(':')[1].replace('\"','').replace('\"','');
				//console.log("RRR*****->" + resultados);

				res.json({"msg":true,"user":user1,"name":nombre});
				
				res.json({"msg":true});
			} else {
				res.json({"msg":false,"user":0,"name":"error"});
				//res.json({"msg":false});
			}			
		});
	}else{
		res.json({"msg":false,"tipo":"error","user":0,"name":"error"});
	}
});

app.post('/regisProveedor',(req,res)=>{
	const {empresa, email, password,direccion} = req.body;
	if(empresa && email && password && direccion){
		conexion.query('SELECT * FROM Proveedor WHERE email = ? ', [email], function(error, result, fields) {
			if (result.length > 0) {
				res.json({"msg":false,"tipo":"error","user":0,"name":"error"});				
			} else {
				console.log("msg////////////////////////////");
				conexion.query('INSERT INTO Proveedor (empresa,email,password,direccion) VALUES (?,?,?,?)',[empresa,email,password, direccion]);
				let elnuevouser = 0;
				conexion.query('SELECT * FROM Proveedor WHERE email = ? ', [email], function(error, result, fields) {
					const myString = JSON.stringify(result);
					var resultados = myString.split(',');
					elnuevouser =  parseInt(resultados[0].split(':')[1]);
					res.json({"msg":true,"user":elnuevouser,"name":empresa});
				});
				
			}			
		});
	}else{
		res.json({"msg":false,"user":0,"name":"error"});
	}
});

app.post('/regisCliente',(req,res)=>{
	const {Nombre, Apellido, password,email,celular,fotografia} = req.body;
	if(Nombre && Apellido && password && email && celular && fotografia){
		conexion.query('SELECT * FROM Cliente WHERE email = ? ', [email], function(error, result, fields) {
			if (result.length > 0) {
				res.json({"msg":false,"tipo":"error","user":0,"name":"error"});				
			} else {
				console.log("msg////////////////////////////");
				conexion.query('INSERT INTO Cliente (Nombre,Apellido,password,email,celular,fotografia)VALUES(?,?,?,?,?,?)',[Nombre, Apellido, password,email,celular,fotografia]);
				let elnuevouser = 0;
				conexion.query('SELECT * FROM Cliente WHERE email = ? ', [email], function(error, result, fields) {
					const myString = JSON.stringify(result);
					var resultados = myString.split(',');
					elnuevouser =  parseInt(resultados[0].split(':')[1]);
					res.json({"msg":true,"user":elnuevouser,"name":Nombre});
				});
				
			}			
		});
	}else{
		res.json({"msg":false,"user":0,"name":"error"});
	}
});

app.listen(app.get('port'),()=>{
	console.log('Server on port 3003');
});
