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


app.set('port',6003);
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


app.post('/RegistrarFavorito',(req,res)=>{
    const {Nombre,precio_venta,id_Producto,id_cliente} = req.body;
	if(id_cliente && Nombre && precio_venta && id_Producto){
		console.log("Se inserta->" + id_Producto);
		if(parseInt(id_Producto,10) >= 2000){
			conexion.query('SELECT * FROM Favorito WHERE id_Producto_Cliente = ? && id_cliente = ?', [parseInt(id_Producto,10),parseInt(id_cliente,10)], function(error, result, fields) {
				if (result.length > 0) {
					res.json({"msg":false,"user":0,"producto":"error"});
				} else {
					console.log("msg////////////////////////////");
					conexion.query('INSERT INTO Favorito(Nombre, precio_venta,id_Producto_Cliente,id_cliente) VALUES (?,?,?,?)',[Nombre,parseFloat(precio_venta),parseInt(id_Producto,10),parseInt(id_cliente,10)]);
					console.log("msg////////////////////////////");
					res.json({"msg":true,"user":id_Producto,"producto":Nombre});
					//res.json({"msg":true,"user":elnuevouser,"name":nombre});					
				}			
			});
		}else{
			conexion.query('SELECT * FROM Favorito WHERE id_Producto = ?&& id_cliente = ?', [parseInt(id_Producto,10),parseInt(id_cliente,10)], function(error, result, fields) {
				if (result.length > 0) {
						res.json({"msg":false,"user":0,"producto":"error"});
				} else {
					console.log("menor a 200");
					conexion.query('INSERT INTO Favorito(Nombre, precio_venta,id_Producto,id_cliente) VALUES (?,?,?,?)',[Nombre,parseFloat(precio_venta),parseInt(id_Producto,10),parseInt(id_cliente,10)]);
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
app.post('/EliminarFavorito',(req,res)=>{
    const { id_favorito} = req.body;
	if(id_favorito){
		console.log("Se elimina->" + id_favorito);		
		conexion.query('SELECT * FROM Favorito WHERE id_Favorito = ?', [parseInt(id_favorito,10)], function(error, result, fields) {
			if (result.length > 0) {
				conexion.query('DELETE FROM Favorito WHERE id_Favorito = ?', [parseInt(id_favorito,10)], function(error, result, fields) {
			
					res.json({"msg":true,"user":id_favorito,"id_favorito":id_favorito});
				});
					
			} else {
				
				res.json({"msg":false,"user":0,"id_favorito":"error"});
				
			}			
		});
	}else{
		res.json({"msg":false,"user":0,"id_favorito":"error"});
	}
});

app.post('/MisFavoritos',(req,res)=>{
	const { id } = req.body;
	if(id){
		console.log("Se muestran ->" + id);		
		conexion.query('SELECT * FROM Favorito WHERE id_cliente = ?', [parseInt(id,10)], function(error, result, fields) {
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
app.post('/Categorias',(req,res)=>{
	const { id } = req.body;
	if(id){
		console.log("Se muestran ->" + id);		
		conexion.query('SELECT DISTINCT categoria FROM Producto', function(error, result, fields) {
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


app.post('/ProductosCategoriasP',(req,res)=>{
	const { categoria } = req.body;
	if(categoria){
		console.log("Se muestran ->" + categoria);		
		conexion.query('SELECT * FROM Producto WHERE categoria = ?', [categoria],function(error, result, fields) {
			if (result.length > 0) {
				console.log("msg//////////////////////////// entro");
				
				res.json({result});
			} else {
				res.json({"msg":false,"user":0,"name":"error"});
				
			}			
		});
	}else{
		res.json({"msg":false,"tipo":"error","user":0,"name":"error"});
	}
});


app.post('/ProductosCategoriasC',(req,res)=>{
	const { categoria } = req.body;
	if(categoria){
		console.log("Se muestran ->" +categoria);		
		conexion.query('SELECT * FROM Producto_Cliente WHERE categoria = ?', [categoria],function(error, result, fields) {
			if (result.length > 0) {
				console.log("msg//////////////////////////// entro");
			
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
	console.log('Server on port 6003');
});
