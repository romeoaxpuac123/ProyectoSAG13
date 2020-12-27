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



app.listen(app.get('port'),()=>{
	console.log('Server on port 9003');
});
