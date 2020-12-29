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

app.post('/crear-producto-cliente',(req,res)=>{
    const { id_cliente,nombre,descripcion,stock,precio_venta,foto,fecha_subasta,precio_inicial_subasta,precio_compralo_ahora } = req.body;
    var precio_final = parseFloat(precio_venta)+((parseFloat(precio_venta)*10)/100);
	if(id_cliente && nombre && descripcion && stock && precio_venta && foto){
		console.log("Se inserta->" + nombre);		
		conexion.query('INSERT INTO Producto_Cliente (Nombre,Precio_Venta,stock,categoria,imagen,precio_final,id_cliente,estado) VALUES (?,?,?,?,?,?,?,?)',
																[nombre, parseFloat(precio_venta),parseInt(stock,10), "Fase 3",foto,parseFloat(precio_final), parseInt(id_cliente,10),parseInt("1",10)]);
				console.log("msg////////////////////////////");
				let elnuevouser = 0;
				conexion.query('SELECT * FROM Producto_Cliente WHERE Nombre = ? AND id_cliente = ?', [nombre,parseInt(id_cliente,10)], function(error, result, fields) {
					const myString = JSON.stringify(result);
					console.log("hola-<" + myString)
					var resultados = myString.split(',');
					elnuevouser =  parseInt(resultados[0].split(':')[1]);
					var Nombrex = resultados[1].split(':')[1].replace('\"','').replace('\"','');
					var Precio_Venta = resultados[2].split(':')[1].replace('\"','').replace('\"','');
					var stock = resultados[3].split(':')[1].replace('\"','').replace('\"','');
					var categoria = resultados[4].split(':')[1].replace('\"','').replace('\"','');
					var  imagen = resultados[5].split('\"imagen\":')[1].replace('\"','').replace('\"','');
					var precio_final = resultados[6].split(':')[1].replace('\"','').replace('\"','');
					var id_cliente = resultados[7].split(':')[1].replace('\"','').replace('\"','');
					res.status(200)
					res.json({
						"status": "success",
					
						"data": {
							"id_producto": elnuevouser,
							"nombre": Nombrex,
							"descripcion": Nombrex,
							"stock": stock,
							"precio_venta": precio_final,
							"foto": imagen,
							"fecha_subasta": null,
							"precio_inicial_subasta": null,
							"precio_compralo_ahora": null
						},
					 
						"message": "Producto creado de manera exitosa."
					});
				});
			
	}else{
		res.status(400)
		res.json({
			"status": "fail",
			"message": "No se encontró el campo obligatorio."
		});
	}
});

app.post('/crear-producto-proveedor',(req,res)=>{
    const { id_proveedor,nombre,descripcion,stock,precio_venta,foto,fecha_subasta,precio_inicial_subasta,precio_compralo_ahora } = req.body;
    var precio_final = parseFloat(precio_venta)+((parseFloat(precio_venta)*10)/100);
	if(id_proveedor && nombre && descripcion && stock && precio_venta && foto){
		console.log("Se inserta->" + nombre);		
		conexion.query('INSERT INTO Producto (Nombre,Precio_Venta,stock,categoria,imagen,precio_final,id_provedor,estado) VALUES (?,?,?,?,?,?,?,?)',
																[nombre, parseFloat(precio_venta),parseInt(stock,10), "Fase 3",foto,parseFloat(precio_final), parseInt(id_proveedor,10),parseInt("1",10)]);
				console.log("msg////////////////////////////");
				let elnuevouser = 0;
				conexion.query('SELECT * FROM Producto WHERE Nombre = ? AND id_provedor = ?', [nombre,parseInt(id_proveedor,10)], function(error, result, fields) {
					const myString = JSON.stringify(result);
					var resultados = myString.split(',');
					elnuevouser =  parseInt(resultados[0].split(':')[1]);
					var Nombrex = resultados[1].split(':')[1].replace('\"','').replace('\"','');
					var Precio_Venta = resultados[2].split(':')[1].replace('\"','').replace('\"','');
					var stock = resultados[3].split(':')[1].replace('\"','').replace('\"','');
					var categoria = resultados[4].split(':')[1].replace('\"','').replace('\"','');
					var  imagen = resultados[5].split('\"imagen\":')[1].replace('\"','').replace('\"','');
					var precio_final = resultados[6].split(':')[1].replace('\"','').replace('\"','');
					var id_cliente = resultados[7].split(':')[1].replace('\"','').replace('\"','');
					res.status(200)
					res.json({
						"status": "success",
					
						"data": {
							"id_producto": elnuevouser,
							"nombre": Nombrex,
							"descripcion": Nombrex,
							"stock": stock,
							"precio_venta": precio_final,
							"foto": imagen,
							"fecha_subasta": null,
							"precio_inicial_subasta": null,
							"precio_compralo_ahora": null
						},
					 
						"message": "Producto creado de manera exitosa."
					});
				});
			
	}else{
		res.status(400)
		res.json({
			"status": "fail",
			"message": "No se encontró el campo obligatorio."
		});
	}
});


app.get('/ver-productos', function(req, res) {
	
	if(req.query.id_producto){
		console.log("hola")
		if(parseInt(req.query.id_producto,10)>=2000){
			conexion.query('SELECT id_Producto_Cliente AS id_producto,Nombre AS nombre, Nombre AS descripcion,stock,precio_final AS precio_venta, imagen AS foto, fecha_subasta AS fecha_subasta,precio_subaste AS precio_inicial_subasta,precio_subaste AS precio_compralo_ahora FROM Producto_Cliente WHERE id_Producto_Cliente = ?;',[parseInt(req.query.id_producto,10)], function(error, data, fields) {
				if(data.length>0){
					res.status(200)
					res.json({"status": "success",data});
				}else{
					res.status(400)
					res.json({
						"status": "fail",
						"message": "No existe producto."
					});
				}
			
			});
		}else{
						
			conexion.query('SELECT id_Producto AS id_producto,Nombre AS nombre, Nombre AS descripcion,stock,precio_final AS precio_venta, imagen AS foto, fecha_subasta AS fecha_subasta,precio_subaste AS precio_inicial_subasta,precio_subaste AS precio_compralo_ahora FROM Producto WHERE id_Producto = ?;',[parseInt(req.query.id_producto,10)], function(error, data, fields) {
				if(data.length>0){
					res.status(200)
					res.json({"status": "success",data});
				}else{
					res.status(400)
					res.json({
						"status": "fail",
						"message": "No existe producto."
					});
				}
				
			});
		}
	}else{
		conexion.query('SELECT id_Producto_Cliente AS id_producto,Nombre AS nombre, Nombre AS descripcion,stock,precio_final AS precio_venta, imagen AS foto, fecha_subasta AS fecha_subasta,precio_subaste AS precio_inicial_subasta,precio_subaste AS precio_compralo_ahora FROM Producto_Cliente;', function(error, result, fields) {
			
			conexion.query('SELECT id_Producto AS id_producto,Nombre AS nombre, Nombre AS descripcion,stock,precio_final AS precio_venta, imagen AS foto, fecha_subasta AS fecha_subasta,precio_subaste AS precio_inicial_subasta,precio_subaste AS precio_compralo_ahora FROM Producto;', function(error, result2, fields) {
				//Resultado = result + result2;
				console.log(result.length + "--" + result2.length);
				let data = Object.assign(result);
				data = data.concat(result2);
				res.status(200)			
				res.json({"status": "success",data});
				
			});
		});
	}
	

	//res.json({"msg":false,"tipo":"error","user":0,"name":"error"});
});
app.post('/realizar-compra',(req,res)=>{
    const { id_cliente,productos } = req.body;
	if(id_cliente && productos){
		console.log("Cliente->" + id_cliente);
		let totalAPagar = 0.0;
		for(let i = 0; i < productos.length;i++){
			console.log("Producto->" + productos[i].id_producto + " Cantidad->" + productos[i].cantidad);
			if(parseInt(productos[i].id_producto,10)>=2000){
				
				conexion.query('SELECT * FROM Producto_Cliente WHERE  id_Producto_Cliente = ?', [parseInt(productos[i].id_producto,10)], function(error, result, fields) {
					totalAPagar = totalAPagar + (parseFloat(result[0].precio_final) * parseFloat(productos[i].cantidad));
					if(i == productos.length -1){
						console.log("--" + totalAPagar);
						conexion.query('INSERT INTO Factura (id_cliente,fecha,total,NIT,Direccion_De_Envio,EstadoFinal) VALUES (?,NOW(),?,?,?,?);',[ [parseInt(id_cliente,10)],totalAPagar,"CF","Guatemala","EN_TIENDA"], function(err, rows, fields) {
							
							conexion.query('SELECT * FROM Factura WHERE id_cliente = ?;',[parseInt(id_cliente,10)], function(err, rows, fields) {
								for(let ixx = 0; ixx < productos.length;ixx++){
									if(parseInt(productos[ixx].id_producto,10)>=2000){
										conexion.query('SELECT * FROM Producto_Cliente WHERE  id_Producto_Cliente = ?', [parseInt(productos[ixx].id_producto,10)], function(error, resultxd, fields) {
											console.log("que pedo")
											let subtotalAPagar2 = (parseFloat(resultxd[0].precio_final) * parseFloat(productos[ixx].cantidad));
											conexion.query('INSERT INTO Venta (id_factura,id_Producto_Cliente,id_cliente,cantidad,subtotal) VALUES (?,?,?,?,?);',[ [parseInt(rows[rows.length-1].id_factura,10)],[parseInt(productos[ixx].id_producto,10)],[parseInt(id_cliente,10)],[parseInt(productos[ixx].cantidad,10)],subtotalAPagar2], function(err, rows, fields) {
												//res.json({"msg":true,"user":id_cliente,"name":rows[rows.length-1].id_factura});
												//res.json({"msg":true});
											});
										});
									}else{
										conexion.query('SELECT * FROM Producto WHERE  id_Producto = ?', [parseInt(productos[ixx].id_producto,10)], function(error, resultxd, fields) {
											console.log("que pedo")
											let subtotalAPagar2 = (parseFloat(resultxd[0].precio_final) * parseFloat(productos[ixx].cantidad));
											conexion.query('INSERT INTO Venta (id_factura,id_Producto,id_cliente,cantidad,subtotal) VALUES (?,?,?,?,?);',[ [parseInt(rows[rows.length-1].id_factura,10)],[parseInt(productos[ixx].id_producto,10)],[parseInt(id_cliente,10)],[parseInt(productos[ixx].cantidad,10)],subtotalAPagar2], function(err, rows, fields) {
												//res.json({"msg":true,"user":id_cliente,"name":rows[rows.length-1].id_factura});
												//res.json({"msg":true});
											});
										});
									}
									
									if(ixx == productos.length -1){
										conexion.query('SELECT email FROM Cliente WHERE id_cliente = ?;',[parseInt(id_cliente,10)], function(err, rows2, fields) {
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
												subject: "Notificacion Compra",
												text: "Gracias por tu compra :D tu factura No. " + [parseInt(rows[rows.length-1].id_factura,10)] + " con un total de Q. " + totalAPagar + " ha sido registrada, ATT G13"
											};
										
											traspoter.sendMail(mailOption,(error,info)=>{
												if(error){
													res.status(500).send(error.message);
												}
												else{
													console.log("Email enviado");
													//res.status(200).jsonp(req.body);
												}
											});		
										});
									}
								}
								
							});
						});
					}
				});
			}else{
				conexion.query('SELECT * FROM Producto WHERE id_Producto = ?', [parseInt(productos[i].id_producto,10)], function(error, result, fields) {
					totalAPagar = totalAPagar + (parseFloat(result[0].precio_final) * parseFloat(productos[i].cantidad));
					if(i == productos.length -1){
						console.log("--" + totalAPagar)
						conexion.query('INSERT INTO Factura (id_cliente,fecha,total,NIT,Direccion_De_Envio,EstadoFinal) VALUES (?,NOW(),?,?,?,?);',[ [parseInt(id_cliente,10)],totalAPagar,"CF","Guatemala","EN_TIENDA"], function(err, rows, fields) {
							conexion.query('SELECT * FROM Factura WHERE id_cliente = ?;',[parseInt(id_cliente,10)], function(err, rows, fields) {
								for(let ixx = 0; ixx < productos.length;ixx++){
									if(parseInt(productos[ixx].id_producto,10)>=2000){
										conexion.query('SELECT * FROM Producto_Cliente WHERE  id_Producto_Cliente = ?', [parseInt(productos[ixx].id_producto,10)], function(error, resultxd, fields) {
											console.log("que pedo")
											let subtotalAPagar2 = (parseFloat(resultxd[0].precio_final) * parseFloat(productos[ixx].cantidad));
											conexion.query('INSERT INTO Venta (id_factura,id_Producto_Cliente,id_cliente,cantidad,subtotal) VALUES (?,?,?,?,?);',[ [parseInt(rows[rows.length-1].id_factura,10)],[parseInt(productos[ixx].id_producto,10)],[parseInt(id_cliente,10)],[parseInt(productos[ixx].cantidad,10)],subtotalAPagar2], function(err, rows, fields) {
												//res.json({"msg":true,"user":id_cliente,"name":rows[rows.length-1].id_factura});
												//res.json({"msg":true});
											});
										});
									}else{
										conexion.query('SELECT * FROM Producto WHERE  id_Producto = ?', [parseInt(productos[ixx].id_producto,10)], function(error, resultxd, fields) {
											console.log("que pedo")
											let subtotalAPagar2 = (parseFloat(resultxd[0].precio_final) * parseFloat(productos[ixx].cantidad));
											conexion.query('INSERT INTO Venta (id_factura,id_Producto,id_cliente,cantidad,subtotal) VALUES (?,?,?,?,?);',[ [parseInt(rows[rows.length-1].id_factura,10)],[parseInt(productos[ixx].id_producto,10)],[parseInt(id_cliente,10)],[parseInt(productos[ixx].cantidad,10)],subtotalAPagar2], function(err, rows, fields) {
												//res.json({"msg":true,"user":id_cliente,"name":rows[rows.length-1].id_factura});
												//res.json({"msg":true});
											});
										});
									}
									if(ixx == productos.length -1){
										conexion.query('SELECT email FROM Cliente WHERE id_cliente = ?;',[parseInt(id_cliente,10)], function(err, rows2, fields) {
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
												subject: "Notificacion Compra",
												text: "Gracias por tu compra :D tu factura No. " + [parseInt(rows[rows.length-1].id_factura,10)] + " con un total de Q. " + totalAPagar + " ha sido registrada, ATT G13"
											};
										
											traspoter.sendMail(mailOption,(error,info)=>{
												if(error){
													res.status(500).send(error.message);
												}
												else{
													console.log("Email enviado");
													//res.status(200).jsonp(req.body);
												}
											});		
										});
									}
									
								}
								
							});
						});
					}
				});
			}
			
		}
		for(let i = 0; i < productos.length;i++){
			
			if(parseInt(productos[i].id_producto,10)>=2000){
				conexion.query("UPDATE Producto_Cliente SET stock = (stock - ?) WHERE id_Producto_Cliente = ?", [parseFloat(productos[i].cantidad),parseInt(productos[i].id_producto,10)], function(error, result, fields) {
				
				});
			}else{
				conexion.query("UPDATE Producto SET stock = (stock - ?) WHERE id_Producto = ?", [parseFloat(productos[i].cantidad),parseInt(productos[i].id_producto,10)], function(error, result, fields) {
				
				});
			}
		}
		res.status(200)		
		res.json({
			"status": "success",
			"message": "Se ha relizado la compra de manera exitosa."
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
