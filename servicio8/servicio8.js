var express = require('express');
var app = express();
var mysql = require('mysql');
const cors = require('cors');
var path = require('path');
var nodemailer = require('nodemailer');
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


app.set('port',9009);
app.set('json spaces',2);
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.get('/Usuario',(req,res)=>{
	let Respuesta = {
		Nombre: 'Hola Mundo'
	}
	res.json(Respuesta);
});

app.post('/registrar-cliente',(req,res)=>{
	const { nombre, apellido,email,contrasena,celular} = req.body;
	console.log(req);
	console.log("------")
	console.log(req.body)
	
	if(nombre && apellido && email && contrasena && celular){
		//res.status(200)
		//res.json({"msg":true});
		conexion.query('SELECT * FROM Cliente WHERE email = ? ', [email], function(error, result, fields) {
			if (result.length > 0) {
				res.status(409)
				res.json({
					"status": "error",
					"message": "Ya existe un usuario registrado con ese correo electrónico."
				});
			} else {
				console.log("msg////////////////////////////");
				conexion.query('INSERT INTO Cliente (Nombre,Apellido,password,email,celular)VALUES(?,?,?,?,?)',[nombre, apellido,contrasena,email,celular]);
				let elnuevouser = 0;
				conexion.query('SELECT * FROM Cliente WHERE email = ? ', [email], function(error, result, fields) {
					const myString = JSON.stringify(result);
					var resultados = myString.split(',');
					elnuevouser =  parseInt(resultados[0].split(':')[1]);
					var nombrex = resultados[1].split(':')[1].replace('\"','').replace('\"','');
					var apellidox = resultados[2].split(':')[1].replace('\"','').replace('\"','');
					var passx = resultados[3].split(':')[1].replace('\"','').replace('\"','');
					var emailx = resultados[4].split(':')[1].replace('\"','').replace('\"','');
					var celularx = resultados[5].split(':')[1].replace('\"','').replace('\"','');
					var fotox = resultados[6].split(':')[1].replace('\"','').replace('\"','').replace('}]','');;
					console.log("RRR*****->" + resultados);
					res.status(200)
					res.json({
						"status": "success",
					
						"data": {
							"id": elnuevouser,
							"nombre":nombrex,
							"apellido":apellidox,
							"email":emailx,
							"contrasena":passx,
							"celular":celularx
						},
					 
						"message": "Usuario creado de manera exitosa."
					});
					
				});
				
			}			
		});
	}else{
		res.status(400)
		res.json({
			"status": "fail",
			"message": "No se encontró el campo obligatorio."
		});
	}

});

app.post('/registrar-proveedor',(req,res)=>{
	const {nombre, apellido, empresa, email, contrasena,direccion} = req.body;
	if(nombre && apellido && empresa && email && contrasena && direccion){
		conexion.query('SELECT * FROM Proveedor WHERE email = ? ', [email], function(error, result, fields) {
			if (result.length > 0) {
				res.status(409)
				res.json({
					"status": "error",
					"message": "Ya existe un usuario registrado con ese correo electrónico."
				});						
			} else {
				console.log("msg////////////////////////////");
				conexion.query('INSERT INTO Proveedor (empresa,email,password,direccion) VALUES (?,?,?,?)',[empresa,email,contrasena, direccion]);
				let elnuevouser = 0;
				conexion.query('SELECT * FROM Proveedor WHERE email = ? ', [email], function(error, result, fields) {
					const myString = JSON.stringify(result);
					var resultados = myString.split(',');
					elnuevouser =  parseInt(resultados[0].split(':')[1]);
					var nombrex = resultados[1].split(':')[1].replace('\"','').replace('\"','');
					var emailx = resultados[2].split(':')[1].replace('\"','').replace('\"','');
					var telx = resultados[3].split(':')[1].replace('\"','').replace('\"','');
					var direccionx = resultados[4].split(':')[1].replace('\"','').replace('\"','').replace('}]','');
					console.log("RRR*****->" + resultados);

					res.status(200)
					res.json({
						"status": "success",
					
						"data": {
							"id": elnuevouser,
							"nombre":nombre,
							"apellido":apellido,
							"empresa":nombrex,
							"email":emailx,
							"contrasena":telx,
							"direccion":direccionx
						},
					 
						"message": "Usuario creado de manera exitosa."
					});
				});
				
			}			
		});
	}else{
		res.status(400)
		res.json({
			"status": "fail",
			"message": "No se encontró el campo obligatorio."
		});				
	}
});


app.post('/login-cliente',(req,res)=>{
	const {email, contrasena} = req.body;
	if(email && contrasena){
		console.log("Se busca->" + email);
		console.log("password->" + contrasena)
		
		conexion.query('SELECT * FROM Cliente WHERE email = ? AND password = ?', [email, contrasena], function(error, result, fields) {
			if (result.length > 0) {
				
				const myString = JSON.stringify(result);
				var resultados = myString.split(',');
				var user1 =  parseInt(resultados[0].split(':')[1]);
				var nombrex = resultados[1].split(':')[1].replace('\"','').replace('\"','');
				var apellidox = resultados[2].split(':')[1].replace('\"','').replace('\"','');
				var passx = resultados[3].split(':')[1].replace('\"','').replace('\"','');
				var emailx = resultados[4].split(':')[1].replace('\"','').replace('\"','');
				var celularx = resultados[5].split(':')[1].replace('\"','').replace('\"','');
				var fotox = resultados[6].split(':')[1].replace('\"','').replace('\"','').replace('}]','');;
				console.log("RRR*****->" + resultados);
				res.status(200)
				res.json(
					{
						"status": "success",
						"data": {
							"id": user1,
							"nombre":nombrex,
							"apellido":apellidox,
							"email":emailx,
							"contrasena":passx,
							"celular":celularx
						},
						"message": "Usuario autenticado de manera exitosa."
					}
				);
			} else {
				res.status(401)
				res.json({
					"status": "error",
					"message": "Las contraseña es incorrecta o el usuario no existe."
				});	
			}			
		});
	}else{
		res.status(400)
		res.json({
			"status": "fail",
			"message": "No se encontró el campo obligatorio."
		});		
	}
});

app.post('/login-proveedor',(req,res)=>{
	const {email, contrasena} = req.body;
	if(email && contrasena){
		console.log("Se busca->" + email);
		console.log("password->" + contrasena)
		
		conexion.query('SELECT * FROM Proveedor WHERE email = ? AND password = ?', [email, contrasena], function(error, result, fields) {
			if (result.length > 0) {
				
				const myString = JSON.stringify(result);
				var resultados = myString.split(',');
				var user1 =  parseInt(resultados[0].split(':')[1]);
				var nombrex = resultados[1].split(':')[1].replace('\"','').replace('\"','');
				var emailx = resultados[2].split(':')[1].replace('\"','').replace('\"','');
				var passx = resultados[3].split(':')[1].replace('\"','').replace('\"','');
				var direccionx = resultados[4].split(':')[1].replace('\"','').replace('\"','').replace('}]','');
				console.log("RRR*****->" + resultados);
				res.status(200)
				res.json(
					{
						"data": {
							"id": user1,
							"nombre":nombrex,
							"apellido":nombrex,
							"empresa":nombrex,
							"email":emailx,
							"contrasena":passx,
							"direccion":direccionx
						},
						"message": "Usuario autenticado de manera exitosa."
					}
				);
			} else {
				res.status(401)
				res.json({
					"status": "error",
					"message": "Las contraseña es incorrecta o el usuario no existe."
				});	
			}			
		});
	}else{
		res.status(400)
		res.json({
			"status": "fail",
			"message": "No se encontró el campo obligatorio."
		});		
	}
});



app.listen(app.get('port'),()=>{
	console.log('Server on port 9009');
});
