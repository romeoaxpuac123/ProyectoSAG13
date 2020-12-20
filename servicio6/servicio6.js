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


app.set('port',8003);
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


app.post('/Apostar',(req,res)=>{
    const {id_cliente,id_Producto,precio_subaste} = req.body;
	if(id_cliente,id_Producto,precio_subaste){
		console.log("Se subasta->" + id_Producto);
		if(parseInt(id_Producto,10) >= 2000){
			conexion.query('SELECT * FROM Producto_Cliente WHERE id_Producto_Cliente = ?', [parseInt(id_Producto,10)], function(error, result, fields) {
				if (result.length > 0) {
					conexion.query('UPDATE Producto_Cliente SET precio_subaste = ? WHERE id_Producto_Cliente = ?',[parseFloat(precio_subaste),parseInt(id_Producto,10)]);
					conexion.query('INSERT INTO LogApuesta(id_cliente, id_Producto,Subastado,imagen ) VALUES (?,?,?,?)',[parseInt(id_cliente,10),parseInt(id_Producto,10),parseFloat(precio_subaste),result[0].imagen ]);
					res.json({"msg":true,"user":"apuesta_correcta","apuesta":"correcta"});
				} else {

					//res.json({"msg":true,"user":elnuevouser,"name":nombre});
					res.json({"msg":false,"user":0,"producto":"error"});					
				}			
			});
		}else{
			conexion.query('SELECT * FROM Producto WHERE id_Producto= ?', [parseInt(id_Producto,10)], function(error, result, fields) {
				if (result.length > 0) {
					conexion.query('UPDATE Producto SET precio_subaste = ? WHERE id_Producto = ?',[parseFloat(precio_subaste),parseInt(id_Producto,10)]);
					conexion.query('INSERT INTO LogApuesta(id_cliente, id_Producto,Subastado,imagen ) VALUES (?,?,?,?)',[parseInt(id_cliente,10),parseInt(id_Producto,10),parseFloat(precio_subaste),result[0].imagen ]);
					res.json({"msg":true,"user":"apuesta_correcta","apuesta":"correcta"});
				} else {

					//res.json({"msg":true,"user":elnuevouser,"name":nombre});
					res.json({"msg":false,"user":0,"producto":"error"});					
				}			
			});
		}
		
	}else{
		res.json({"msg":false,"user":0,"producto":"error"});
	}
});
app.post('/FinApuesta',(req,res)=>{
	const {Nombre,id_Producto,cantidad,precio} = req.body;
	let id_cliente = 0;
	conexion.query('SELECT * FROM LogApuesta WHERE id_Producto = ?', [parseInt(id_Producto,10)], function(error, result, fields) {
		if (result.length > 0) {
			id_cliente = parseInt(result[result.length - 1 ].id_cliente,10);
			var precio_venta = parseFloat(precio);
			if(id_cliente && Nombre && id_Producto && cantidad && precio){
				console.log("Se inserta->" + id_Producto);
				if(parseInt(id_Producto,10) >= 2000){
					conexion.query('SELECT * FROM Carrito WHERE id_Producto_Cliente = ?', [parseInt(id_Producto,10)], function(error, result, fields) {
						if (result.length > 0) {
							res.json({"msg":false,"user":0,"productos":"error"});
						} else {
							console.log("msg////////////////////////////");
							conexion.query('INSERT INTO Carrito(id_cliente,Nombre, id_Producto_Cliente,cantidad,subtotal) VALUES (?,?,?,?,?)',[parseInt(id_cliente,10),Nombre,parseInt(id_Producto,10),parseInt(cantidad,10),parseFloat(precio_venta)]);
							conexion.query('UPDATE Producto_Cliente SET estado = 4 WHERE id_Producto_Cliente = ?',[parseInt(id_Producto,10)]);
							console.log("msg////////////////////////////");
							//res.json({"msg":true,"user":id_Producto,"producto":Nombre});
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
							conexion.query('UPDATE Producto SET estado = 4 WHERE id_Producto = ?',[parseInt(id_Producto,10)]);
							console.log("msg////////////////////////////");
							//res.json({"msg":true,"user":id_Producto,"producto":Nombre});
							//res.json({"msg":true,"user":elnuevouser,"name":nombre});					
						}			
					});
				}
				
			}else{
				res.json({"msg":false,"user":0,"productoa":"error"});
			}
		} else {

			//res.json({"msg":true,"user":elnuevouser,"name":nombre});
			res.json({"msg":false,"user":0,"productoz":"error"});					
		}
	});
	conexion.query('SELECT DISTINCT id_cliente FROM LogApuesta', function(error, result, fields) {
		if (result.length > 0) {
			
			var precio_venta = parseFloat(precio);
			for(let i= 0;i < result.length;i++){
				let id = parseInt(result[i].id_cliente,10);
				conexion.query('SELECT email FROM Cliente WHERE id_cliente = ?;',[parseInt(id,10)], function(err, rows2, fields) {
					if (err) throw err;
					console.log(rows2);
					var traspoter = nodemailer.createTransport({ 
						service: 'gmail',
						auth: {
							user: 'proyectosag13@gmail.com',
							pass: '123cuaderno' // naturally, replace both with your real credentials or an application-specific password
						}
					});
				
					var mailOption = {
						from: "Remitente",
						to: rows2[0].email,
						subject: "Fin Subasta",
						text: "Gracias por subastar el producto " + Nombre + " el precio final del producto fue Q " + precio + " ."
					};
				
					traspoter.sendMail(mailOption,(error,info)=>{
						if(error){
							res.status(500).send(error.message);
						}
						else{
							console.log("Email enviado");
							res.status(200).jsonp(req.body);
						}
					});		
				});	
			}
			
		} else {

			//res.json({"msg":true,"user":elnuevouser,"name":nombre});
			res.json({"msg":false,"user":0,"productox":"error"});					
		}
	});
	


});

app.post('/MisFacturas',(req,res)=>{
	const { id } = req.body;
	if(id){
		console.log("Se muestran ->" + id);		
		conexion.query('SELECT * FROM Factura WHERE id_cliente = ?', [parseInt(id,10)], function(error, result, fields) {
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


app.post('/MisCompras',(req,res)=>{
	const { id } = req.body;
	if(id){
		console.log("Se muestran ->" + id);		
		conexion.query('SELECT * FROM Venta WHERE id_cliente = ?', [parseInt(id,10)], function(error, result, fields) {
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


app.post('/MisApuestas',(req,res)=>{
	const { id } = req.body;
	if(id){
		console.log("Se muestran ->" + id);		
		conexion.query('SELECT * FROM LogApuesta WHERE id_cliente = ?', [parseInt(id,10)],function(error, result, fields) {
			if (result.length > 0) {
				
				res.json({result});
			} else {
	
				//res.json({"msg":true,"user":elnuevouser,"name":nombre});
				res.json({"msg":false,"user":0,"productox":"error"});					
			}
		});
	}else{
		res.json({"msg":false,"tipo":"error","user":0,"name":"error"});
	}
});

app.listen(app.get('port'),()=>{
	console.log('Server on port 8003');
});
