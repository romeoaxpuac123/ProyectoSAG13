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



app.set('port',7003);
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


app.post('/AgregarACarrito',(req,res)=>{
	const { id_cliente,Nombre,id_Producto,cantidad,precio} = req.body;
	var precio_venta = parseFloat(precio) * parseFloat(cantidad) ;
	if(id_cliente && Nombre && id_Producto && cantidad && precio){
		console.log("Se inserta->" + id_Producto);
		if(parseInt(id_Producto,10) >= 2000){
			conexion.query('SELECT * FROM Carrito WHERE id_Producto_Cliente = ?', [parseInt(id_Producto,10)], function(error, result, fields) {
				if (result.length > 0) {
					res.json({"msg":false,"user":0,"producto":"error"});
				} else {
					console.log("msg////////////////////////////");
					conexion.query('INSERT INTO Carrito(id_cliente,Nombre, id_Producto_Cliente,cantidad,subtotal) VALUES (?,?,?,?,?)',[parseInt(id_cliente,10),Nombre,parseInt(id_Producto,10),parseInt(cantidad,10),parseFloat(precio_venta)]);
					console.log("msg////////////////////////////");
					res.json({"msg":true,"user":id_Producto,"producto":Nombre});
					//res.json({"msg":true,"user":elnuevouser,"name":nombre});					
				}			
			});
		}else{
			conexion.query('SELECT * FROM Carrito WHERE id_Producto = ?', [parseInt(id_Producto,10)], function(error, result, fields) {
				if (result.length > 0) {
					res.json({"msg":false,"user":0,"producto":"error"});
				} else {
					console.log("msg////////////////////////////");
					conexion.query('INSERT INTO Carrito(id_cliente, Nombre, id_Producto,cantidad,subtotal) VALUES (?,?,?,?,?)',[parseInt(id_cliente,10),Nombre,parseInt(id_Producto,10),parseInt(cantidad,10),parseFloat(precio_venta)]);
					console.log("msg////////////////////////////");
					res.json({"msg":true,"user":id_Producto,"producto":Nombre});
					//res.json({"msg":true,"user":elnuevouser,"name":nombre});					
				}			
			});
		}
		
	}else{
		res.json({"msg":false,"user":0,"producto":"error"});
	}
});

app.post('/EliminarCarrito',(req,res)=>{
    const { id} = req.body;
	if(id){
		console.log("Se elimina->" + id);		
		conexion.query('SELECT * FROM Carrito WHERE id_carrito = ?', [parseInt(id,10)], function(error, result, fields) {
			if (result.length > 0) {
				conexion.query('DELETE FROM Carrito WHERE id_carrito = ?', [parseInt(id,10)], function(error, result, fields) {
			
					res.json({"msg":true,"user":id,"id":id});
				});
					
			} else {
				
				res.json({"msg":false,"user":0,"id":"error"});
				
			}			
		});
	}else{
		res.json({"msg":false,"user":0,"id":"error"});
	}
});


app.post('/MiCarrito',(req,res)=>{
	const { id } = req.body;
	if(id){
		console.log("Se muestran ->" + id);		
		conexion.query('SELECT * FROM Carrito WHERE id_cliente = ?', [parseInt(id,10)], function(error, result, fields) {
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
	console.log('Server on port 7003');
});
