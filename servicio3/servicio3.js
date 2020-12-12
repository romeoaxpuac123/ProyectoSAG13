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


app.set('port',5003);
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




app.post('/MostrarProductos',(req,res)=>{
	const { id } = req.body;
	if(id){
		console.log("Se muestran ->" + id);		
		conexion.query('SELECT * FROM Producto', function(error, result, fields) {
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

app.post('/RegistrarTarjeta',(req,res)=>{
    const { No_Tarjeta, id_cliente} = req.body;
	if(No_Tarjeta && id_cliente){
		console.log("Se inserta->" + No_Tarjeta);		
		conexion.query('SELECT * FROM Tarjeta WHERE No_Tarjeta = ? && id_cliente = ?', [parseInt(No_Tarjeta,10), parseInt(id_cliente,10)], function(error, result, fields) {
			if (result.length > 0) {
					res.json({"msg":false,"user":0,"tarjeta":"error"});
			} else {
				console.log("msg////////////////////////////");
				conexion.query('INSERT INTO Tarjeta(No_Tarjeta, id_cliente) VALUES (?,?)',[parseInt(No_Tarjeta,10), parseInt(id_cliente,10)]);
				console.log("msg////////////////////////////");
				let elnuevouser = 0;
				conexion.query('SELECT * FROM Tarjeta WHERE No_Tarjeta = ? && id_cliente = ?', [parseInt(No_Tarjeta,10), parseInt(id_cliente,10)], function(error, result, fields) {
					const myString = JSON.stringify(result);
					var resultados = myString.split(',');
					elnuevouser =  parseInt(resultados[0].split(':')[1]);
					var usuariox = parseInt(resultados[1].split(':')[1]);
					var tarjetax = parseInt(resultados[2].split(':')[1].replace('}]',''));
					res.json({"msg":true,"user":usuariox,"tarjeta":tarjetax});
				});
				//res.json({"msg":true,"user":elnuevouser,"name":nombre});
				
			}			
		});
	}else{
		res.json({"msg":false,"user":0,"tarjeta":"error"});
	}
});

app.post('/EliminarTarjeta',(req,res)=>{
    const { No_Tarjeta, id_cliente} = req.body;
	if(No_Tarjeta && id_cliente){
		console.log("Se elimina->" + No_Tarjeta);		
		conexion.query('SELECT * FROM Tarjeta WHERE No_Tarjeta = ? && id_cliente = ?', [parseInt(No_Tarjeta,10), parseInt(id_cliente,10)], function(error, result, fields) {
			if (result.length > 0) {
				conexion.query('DELETE FROM Tarjeta WHERE No_Tarjeta = ? && id_cliente = ?', [parseInt(No_Tarjeta,10), parseInt(id_cliente,10)], function(error, result, fields) {
			
					res.json({"msg":true,"user":No_Tarjeta,"tarjeta":id_cliente});
				});
					
			} else {
				
				res.json({"msg":false,"user":0,"tarjeta":"error"});
				
			}			
		});
	}else{
		res.json({"msg":false,"user":0,"tarjeta":"error"});
	}
});

app.post('/Tarjetas',(req,res)=>{
    const { id_cliente} = req.body;
	if( id_cliente){
		console.log("Tarjetas de->" + id_cliente);		
		conexion.query('SELECT * FROM Tarjeta WHERE id_cliente = ?', [parseInt(id_cliente,10)], function(error, result, fields) {
			if (result.length > 0) {
				
			
					res.json({result});
			
					
			} else {
				
				res.json({"msg":false,"user":0,"tarjeta":"error"});
				
			}			
		});
	}else{
		res.json({"msg":false,"user":0,"tarjeta":"error"});
	}
});



app.listen(app.get('port'),()=>{
	console.log('Server on port 5003');
});
