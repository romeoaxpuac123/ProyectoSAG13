var express = require('express');
var app = express();
var mysql = require('mysql');
const cors = require('cors');
var path = require('path');
var nodemailer = require('nodemailer');
app.use(express.static('public'));
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
			conexion.query('SELECT * FROM Carrito WHERE id_Producto_Cliente = ? && id_cliente = ?', [parseInt(id_Producto,10),parseInt(id_cliente,10)], function(error, result, fields) {
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
			conexion.query('SELECT * FROM Carrito WHERE id_Producto = ? && id_cliente = ?', [parseInt(id_Producto,10),parseInt(id_cliente,10)], function(error, result, fields) {
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


app.post('/Stock',(req,res)=>{
	const { id } = req.body;
	if(id){
		let pool  = mysql.createPool({
			connectionLimit : 10,
			    host : '172.18.0.2',
				database : 'ProyectoSA',
				user : 'root',
				password : 'grupo13',
				port: 3306
		  });
		  let var1 = 0;
		  let productoFaltante = "";
		  let totalAPagar = 0.0;		
		  let numerofactura = 0;
		pool.query('SELECT * FROM Carrito WHERE id_cliente = ?;',[parseInt(id,10)], function(err, rows, fields) {
			if (err) throw err;
			//console.log(rows);
			console.log("Verificando STOCK");
			for (let i=0; i< rows.length; i++)
			{
				let carritoxd = rows[i];
				if(carritoxd.id_Producto_Cliente == null){
					//console.log(i);
					conexion.query('SELECT stock FROM Producto WHERE id_Producto  = ?;',[parseInt(carritoxd.id_Producto,10)], function(err, rows2, fields) {
						let carrito2 = rows2[0];
						//console.log("-PP-");
						//console.log(i+"----" + carritoxd.Nombre + "-----");
						//console.log(carritoxd.cantidad + "<>" + carrito2.stock);
						totalAPagar = totalAPagar + parseFloat(carritoxd.subtotal)
						if(parseInt(carritoxd.cantidad,10)>parseInt(carrito2.stock,10)){
							//console.log("entro 1")
							var1 = 1;
							productoFaltante = carritoxd.Nombre;
						}								
					});							
				}
				else if(carritoxd.id_Producto == null){
					//console.log("-PC-");
					//console.log(i)
					conexion.query('SELECT stock FROM Producto_Cliente WHERE id_Producto_Cliente  = ?;',[parseInt(carritoxd.id_Producto_Cliente,10)], function(err, rows2, fields) {
						var carrito2 = rows2[0];
						//console.log(i+"----" + carritoxd.Nombre + "-----");
						//console.log(carritoxd.cantidad + "<>" + carrito2.stock);
						totalAPagar = totalAPagar + parseFloat(carritoxd.subtotal)
						if(parseInt(carritoxd.cantidad,10)>parseInt(carrito2.stock,10)){
							//console.log("entro 2")
							var1 = 1;
							productoFaltante = carritoxd.Nombre;
						}
					});	
				}
			}
	////sdafasdf
			pool.query('SELECT * FROM Carrito WHERE id_cliente = ?;',[parseInt(id,10)], function(err, rows, fields) {
				if (err) throw err;
				//console.log(rows);
				console.log("CREANDO FACTURA");
				if(var1 == 1){
					res.json({"msg":false,"user":id,"name":productoFaltante});
				}else{
					console.log("Total a Pagar:->" + totalAPagar)
					res.json({"msg":true,"user":id,"name":"TTDD"});
				}
		//VAMOS A INSERTAR PRODUCTOS :D		
							
			});
				
		});
		
	}else{
		res.json({"msg":false,"tipo":"error","user":0,"name":"error"});
	}
});

app.post('/Factura',(req,res)=>{
	const { id,direccion,nit } = req.body;
	if(id,direccion,nit){
		let pool  = mysql.createPool({
			connectionLimit : 10,
			 host : '172.18.0.2',
				database : 'ProyectoSA',
				user : 'root',
				password : 'grupo13',
				port: 3306
		  });
		  let totalAPagar = 0.0;	
		pool.query('SELECT * FROM Carrito WHERE id_cliente = ?;',[parseInt(id,10)], function(err, rows, fields) {
			if (err) throw err;
			//console.log(rows);
			console.log("Verificando STOCK");
			for (let i=0; i< rows.length; i++)
			{	let carritoxd = rows[i];
				totalAPagar = totalAPagar + parseFloat(carritoxd.subtotal)
			}
			
			pool.query('INSERT INTO Factura (id_cliente,fecha,total,NIT,Direccion_De_Envio) VALUES (?,NOW(),?,?,?);',[ [parseInt(id,10)],totalAPagar,nit,direccion], function(err, rows, fields) {
				pool.query('SELECT * FROM Factura WHERE id_cliente = ?;',[parseInt(id,10)], function(err, rows, fields) {
					res.json({"msg":true,"user":id,"name":rows[rows.length-1].id_factura});
				});
			});				
		});
		
	}else{
		res.json({"msg":false,"tipo":"error","user":0,"name":"error"});
	}

});

app.post('/Ventas',(req,res)=>{
	const { id,numero_factura } = req.body;
	if(id,numero_factura){
		let pool  = mysql.createPool({
			connectionLimit : 10,
			 host : '172.18.0.2',
				database : 'ProyectoSA',
				user : 'root',
				password : 'grupo13',
				port: 3306
		  });
		  let var1 = 0;
		  let productoFaltante = "";
		  let totalAPagar = 0.0;		
		  let numerofactura = 0;
		pool.query('SELECT * FROM Carrito WHERE id_cliente = ?;',[parseInt(id,10)], function(err, rows, fields) {
			if (err) throw err;
			for (let i=0; i< rows.length; i++)
				{
					let carritoxd = rows[i];
					if(carritoxd.id_Producto_Cliente == null){
						conexion.query("UPDATE Producto SET stock = (stock - ?) WHERE id_Producto = ?", [parseFloat(carritoxd.cantidad),parseInt(carritoxd.id_Producto,10)], function(error, result, fields) {
					
						});						
					}
					else if(carritoxd.id_Producto == null){
						conexion.query("UPDATE Producto_Cliente SET stock = (stock - ?) WHERE id_Producto_Cliente = ?", [parseFloat(carritoxd.cantidad),parseInt(carritoxd.id_Producto_Cliente,10)], function(error, result, fields) {
					
						});	
					}
				}
						
		});
		pool.query('SELECT * FROM Carrito WHERE id_cliente = ?;',[parseInt(id,10)], function(err, rows, fields) {
			if (err) throw err;
			//console.log(rows);
			for (let i=0; i< rows.length; i++){
				pool.query('INSERT INTO Venta (id_factura,id_Producto,id_Producto_Cliente,id_cliente,cantidad,subtotal) VALUES (?,?,?,?,?,?);',[ [parseInt(numero_factura,10)],rows[i].id_Producto,rows[i].id_Producto_Cliente,rows[i].id_cliente,rows[i].cantidad,rows[i].subtotal], function(err, rows, fields) {
					
				});	
			}
			pool.query('DELETE FROM Carrito WHERE id_cliente = ?;',[parseInt(id)], function(err, rows, fields) {
						
			});
	
			
				
		});
		pool.query('SELECT total FROM Factura WHERE id_factura = ?;',[parseInt(numero_factura,10)], function(err, rows, fields) {
			if (err) throw err;
			//console.log(rows);
			pool.query('SELECT email FROM Cliente WHERE id_cliente = ?;',[parseInt(id,10)], function(err, rows2, fields) {
				if (err) throw err;
				console.log(rows);
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
					subject: "Muchas Gracias",
					text: "Gracias por tu compra :D tu factura No. " + numero_factura + " con un total de Q. " + rows[0].total + " ha sido registrada"
				};
			
				traspoter.sendMail(mailOption,(error,info)=>{
					if(error){
						console.log(error);
						res.json({"msg":false,"tipo":"error","user":0,"name":error});
					}
					else{
						console.log("Email enviado");
						res.json({"msg":true,"user":id,"name":"TTDD"});
					}
				});		
			});	
		});
		pool.query('SELECT total FROM Factura WHERE id_factura = ?;',[parseInt(numero_factura,10)], function(err, rows, fields) {
			if (err) throw err;
			//console.log(rows);
			pool.query('SELECT * FROM Cliente WHERE id_cliente = ?;',[parseInt(id,10)], function(err, rows2, fields) {
				if (err) throw err;
				//console.log(rows);
				//console.log(rows2);
				var PDFDocument, doc;
				var fs = require('fs');
				PDFDocument = require('pdfkit');
				doc = new PDFDocument;
				doc.pipe(fs.createWriteStream('public/factura'+numero_factura+'.pdf'));
				// lógica para crear el documento PDF va aquí
					doc.fontSize(30).text('FACTURA NO. '+numero_factura, 70, 70);

					// Establecemos la anchura y el tipo de alineación de nuestros parrafos.
					doc.fontSize(15).text('CLiente: ' + rows2[0].Nombre, {
						align: 'left' // tipo de alineación (left, center, right o justify)
					});
					doc.fontSize(15).text('Apellido: ' + rows2[0].Apellido, {
						
						align: 'left' // tipo de alineación (left, center, right o justify)
					});
					doc.fontSize(15).text('Email: ' + rows2[0].email, {
						
						align: 'left' // tipo de alineación (left, center, right o justify)
					});
					doc.fontSize(15).text('Celular: ' + rows2[0].celular, {
						
						align: 'left' // tipo de alineación (left, center, right o justify)
					});
					doc.fontSize(15).text('Fecha: ' + rows[0].fecha, {
						
						align: 'left' // tipo de alineación (left, center, right o justify)
					});
					doc.fontSize(15).text('NIT: ' + rows[0].NIT , {
						
						align: 'left' // tipo de alineación (left, center, right o justify)
					});
					doc.fontSize(15).text('Direccion: ' + rows[0].Direccion_De_Envio , {
						
						align: 'left' // tipo de alineación (left, center, right o justify)
					});
					doc.fontSize(15).text('Total: Q' + rows[0].total , {
						
						align: 'left' // tipo de alineación (left, center, right o justify)
					});
					doc.fontSize(20).text('CANCELADO', {
						
						align: 'center' // tipo de alineación (left, center, right o justify)
					});
					doc.fontSize(10).text('Sujeto a pagos trimestrales', {
						
						align: 'center' // tipo de alineación (left, center, right o justify)
					});
				doc.end();
			});	
		});
		
		

		
	}else{
		res.json({"msg":false,"tipo":"error","user":0,"name":"error"});
	}
});


app.listen(app.get('port'),()=>{
	console.log('Server on port 7003');
});
