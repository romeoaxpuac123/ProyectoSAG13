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


app.set('port',9003);
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




app.post('/MiPedido',(req,res)=>{
	const { id, id_venta } = req.body;
	if(id,id_venta){
		console.log("Se muestran ->" + id);		
		conexion.query('SELECT F.id_factura,F.fecha, F.total,F.EstadoFinal, F.EstadoActual, V.id_Producto, V.id_Producto_Cliente, V.cantidad, V.id_factura FROM Factura F,Venta V WHERE F.id_cliente = ? AND F.id_factura = ? AND V.id_factura = ?', [parseInt(id,10),parseInt(id_venta,10),parseInt(id_venta,10)], function(error, result, fields) {
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


app.post('/TodasLasCompras',(req,res)=>{
	const { id } = req.body;
	if(id){
		console.log("Se muestran ->" + id);		
		conexion.query('Select F.id_factura AS Orden,C.Nombre AS Cliente,F.NIT,F.total,F.EstadoActual from Factura F, Cliente C WHERE C.id_cliente = F.id_cliente', function(error, result, fields) {
			if (result.length > 0) {
				console.log("msg//////////////////////////// entro");
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

app.post('/ModificarEstado',(req,res)=>{
	const { id,estado } = req.body;
	if(id,estado){
		console.log("Se muestran ->" + id);		
		conexion.query("UPDATE Factura SET EstadoActual =  ? WHERE id_factura = ?", [estado,parseInt(id,10)], function(error, result, fields) {
			if(estado =="EN_TIENDA"){
				conexion.query("SELECT S.Nombre, S.email, F.id_factura FROM Factura F, Cliente S WHERE F.id_factura = ? AND S.id_cliente = F.id_cliente AND F.EstadoFinal = ? ", [parseInt(id,10),"TIENDA"], function(error, result2, fields) {
					if (result2.length > 0) {
						console.log(result2);
						
						var traspoter = nodemailer.createTransport({ 
							service: 'gmail',
										auth: {
											user: 'proyectosag13@gmail.com',
											pass: '123cuaderno' // naturally, replace both with your real credentials or an application-specific password
										}
						});
					
						var mailOption = {
							from: "Remitente",
							to: result2[0].email,
							subject: "Producto en tienda",
							text: "Hola " + result2[0].Nombre + " Tu Orden: " + result2[0].id_factura +  " esta en tienda, puedes venir por el, Gracias" 
						};
					
						traspoter.sendMail(mailOption,(error,info)=>{
							if(error){
								res.status(500).send(error.message);
							}
							else{
								console.log("Email enviado");
								res.status(200).jsonp(req.body);
								res.json({"msg":true});
								
							}
						});	

						
						
					}
				});
				res.json({"msg":true});
			}
		});
	}else{
		res.json({"msg":false,"tipo":"error","user":0,"name":"error"});
	}
});



app.listen(app.get('port'),()=>{
	console.log('Server on port 9003');
});
