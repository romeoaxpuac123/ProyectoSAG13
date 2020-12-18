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


app.set('port',4003);
app.set('json spaces',2);
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.get('/reProducto',(req,res)=>{
	let Respuesta = {
		Nombre: 'Hola Mundo'
	}
	res.json(Respuesta);
});


app.post('/RegistrarProducto',(req,res)=>{
    const { nombre, Precio_venta,stock, categoria, imagen,id_proveedor,precio_subaste,estado } = req.body;
    var precio_final = parseFloat(Precio_venta)+((parseFloat(Precio_venta)*10)/100);
	if(nombre && Precio_venta && stock && categoria && imagen && id_proveedor){
		console.log("Se inserta->" + nombre);		
		conexion.query('SELECT * FROM Producto WHERE Nombre = ?', [nombre], function(error, result, fields) {
			if (result.length > 0) {
				
				//const myString = JSON.stringify(result);
				//var resultados = myString.split(',');
				//var user1 =  parseInt(resultados[0].split(':')[1]);
				//var nombre = resultados[1].split(':')[1].replace('\"','').replace('\"','');
				//console.log("RRR*****->" + resultados);
				res.json({"msg":false,"user":0,"name":"error"});
			} else {
				console.log("msg////////////////////////////");
				conexion.query('INSERT INTO Producto (Nombre,Precio_Venta,stock,categoria,imagen,precio_final,id_provedor,precio_subaste,estado) VALUES (?,?,?,?,?,?,?,?,?)',[nombre, parseFloat(Precio_venta),parseInt(stock,10), categoria, imagen,parseFloat(precio_final),parseInt(id_proveedor),parseFloat(precio_subaste),parseInt(estado,10)]);
				console.log("msg////////////////////////////");
				let elnuevouser = 0;
				conexion.query('SELECT * FROM Producto WHERE Nombre = ?', [nombre], function(error, result, fields) {
					const myString = JSON.stringify(result);
					var resultados = myString.split(',');
					elnuevouser =  parseInt(resultados[0].split(':')[1]);
					res.json({"msg":true,"user":elnuevouser,"name":nombre});
				});
				//res.json({"msg":true,"user":elnuevouser,"name":nombre});
				
			}			
		});
	}else{
		res.json({"msg":false,"tipo":"error","user":0,"name":"error"});
	}
});

app.post('/ActualizarProducto',(req,res)=>{
    const { id, nombre, Precio_venta,stock, categoria, imagen,id_proveedor,precio_subaste,estado } = req.body;
    var precio_final = parseFloat(Precio_venta)+((parseFloat(Precio_venta)*10)/100);
	if(id && nombre && Precio_venta && stock && categoria && imagen && id_proveedor){
		console.log("Se actualiza ->" + nombre);		
		conexion.query('SELECT * FROM Producto WHERE id_Producto = ?', [id], function(error, result, fields) {
			if (result.length > 0) {
				console.log("msg//////////////////////////// entro");
				
				console.log("msg////////////////////////////");
				let elnuevouser = 0;
				conexion.query("UPDATE Producto SET Nombre = ?, Precio_Venta = ?, stock = ?, categoria = ?, imagen = ?, precio_final = ?, id_provedor = ?, precio_subaste = ?,estado = ? WHERE id_Producto = ?", [nombre, parseFloat(Precio_venta),parseInt(stock,10), categoria, imagen,parseFloat(precio_final),parseInt(id_proveedor,10),parseFloat(precio_subaste),parseInt(estado,10),parseInt(id,10)], function(error, result, fields) {
					
					elnuevouser =  parseInt(id,10);
					res.json({"msg":true,"user":elnuevouser,"name":nombre});
				});
				
				
			} else {
				res.json({"msg":false,"user":0,"name":"error"});
				
			}			
		});
	}else{
		res.json({"msg":false,"tipo":"error","user":0,"name":"error"});
	}
});

app.post('/EliminarProducto',(req,res)=>{
	const { id } = req.body;
	if(id){
		console.log("Se elimina ->" + id);		
		conexion.query('SELECT * FROM Producto WHERE id_Producto = ?', [id], function(error, result, fields) {
			if (result.length > 0) {
				console.log("msg//////////////////////////// entro");
				
				console.log("msg////////////////////////////");
				let elnuevouser = 0;
				conexion.query('DELETE FROM Producto WHERE id_Producto = ?', [parseInt(id,10)], function(error, result, fields) {
			
					elnuevouser =  parseInt(id,10);
					res.json({"msg":true,"user":elnuevouser,"name":id});
				});
				
				
			} else {
				res.json({"msg":false,"user":0,"name":"error"});
				
			}			
		});
	}else{
		res.json({"msg":false,"tipo":"error","user":0,"name":"error"});
	}
	
});

app.post('/MostrarProductos',(req,res)=>{
	const { id } = req.body;
	if(id){
		console.log("Se muestran ->" + id);		
		conexion.query('SELECT * FROM Producto WHERE id_provedor = ?', [id], function(error, result, fields) {
			if (result.length > 0) {
				console.log("msg//////////////////////////// entro");
				elnuevouser =  parseInt(id,10);
				console.log(result)
				res.json({result});
			} else {
				res.json({"msg":false,"user":0,"name":"error"});
				
			}			
		});
	}else{
		res.json({"msg":false,"tipo":"error","user":0,"name":"error"});
	}
});

app.listen(app.get('port'),()=>{
	console.log('Server on port 4003');
});
