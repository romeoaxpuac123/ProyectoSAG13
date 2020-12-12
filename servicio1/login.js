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
				var nombrex = resultados[1].split(':')[1].replace('\"','').replace('\"','');
				var emailx = resultados[2].split(':')[1].replace('\"','').replace('\"','');
				var direccionx = resultados[4].split(':')[1].replace('\"','').replace('\"','').replace('}]','');
				console.log("RRR*****->" + resultados);

				res.json({"msg":true,"user":user1,"name":nombrex,"email":emailx,"direccion":direccionx});
				
			} else {
				res.json({"msg":false,"user":0,"name":"error","email":"error","direccion":"error"});
				//res.json({"msg":false});
			}			
		});
	}else{
		res.json({"msg":false,"user":0,"name":"error","email":"error","direccion":"error"});
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
				var nombrex = resultados[1].split(':')[1].replace('\"','').replace('\"','');
				var apellidox = resultados[2].split(':')[1].replace('\"','').replace('\"','');
				var passx = resultados[3].split(':')[1].replace('\"','').replace('\"','');
				var emailx = resultados[4].split(':')[1].replace('\"','').replace('\"','');
				var celularx = resultados[5].split(':')[1].replace('\"','').replace('\"','');
				var fotox = resultados[6].split(':')[1].replace('\"','').replace('\"','').replace('}]','');;
				console.log("RRR*****->" + resultados);

				res.json({"msg":true,"user":user1,"name":nombrex,"apellido":apellidox,"pass":passx,"email":emailx,"celular":celularx,"fotografia":fotox});
			} else {
				res.json({"msg":false,"user":"error","name":"error","apellido":"error","pass":"error","email":"error","celular":"error","fotografia":"error"});
				//res.json({"msg":false});
			}			
		});
	}else{
		res.json({"msg":false,"user":"error","name":"error","apellido":"error","pass":"error","email":"error","celular":"error","fotografia":"error"});
	}
});

app.post('/regisProveedor',(req,res)=>{
	const {empresa, email, password,direccion} = req.body;
	if(empresa && email && password && direccion){
		conexion.query('SELECT * FROM Proveedor WHERE email = ? ', [email], function(error, result, fields) {
			if (result.length > 0) {
				res.json({"msg":false,"user":0,"name":"error","email":"error","tel":"error","direccion":"error"});
								
			} else {
				console.log("msg////////////////////////////");
				conexion.query('INSERT INTO Proveedor (empresa,email,password,direccion) VALUES (?,?,?,?)',[empresa,email,password, direccion]);
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

					res.json({"msg":true,"user":elnuevouser,"name":nombrex,"email":emailx,"tel":telx,"direccion":direccionx});
				
					//res.json({"msg":true,"user":elnuevouser,"name":empresa});
				});
				
			}			
		});
	}else{
		res.json({"msg":false,"user":0,"name":"error","email":"error","tel":"error","direccion":"error"});
				
	}
});

app.post('/regisCliente',(req,res)=>{
	const {Nombre, Apellido, password,email,celular,fotografia} = req.body;
	if(Nombre && Apellido && password && email && celular && fotografia){
		conexion.query('SELECT * FROM Cliente WHERE email = ? ', [email], function(error, result, fields) {
			if (result.length > 0) {
				res.json({"msg":false,"user":"error","name":"error","apellido":"error","pass":"error","email":"error","celular":"error","fotografia":"error"});				
			} else {
				console.log("msg////////////////////////////");
				conexion.query('INSERT INTO Cliente (Nombre,Apellido,password,email,celular,fotografia)VALUES(?,?,?,?,?,?)',[Nombre, Apellido, password,email,celular,fotografia]);
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

				res.json({"msg":true,"user":elnuevouser,"name":nombrex,"apellido":apellidox,"pass":passx,"email":emailx,"celular":celularx,"fotografia":fotox});
					
				});
				
			}			
		});
	}else{
		res.json({"msg":false,"user":"error","name":"error","apellido":"error","pass":"error","email":"error","celular":"error","fotografia":"error"});
	}
});

app.listen(app.get('port'),()=>{
	console.log('Server on port 3003');
});
