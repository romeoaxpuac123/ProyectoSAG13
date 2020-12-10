var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
const llamada = require('../controlador/catalogo_controller');
const cors = require('cors');
router.use(cors());
router.get('/',(req,res)=>{
    res.json({msj:true})
})

//Consultar= GET, Insertar= POST, Actualizar= GET, Eliminar = DELETE
router.get('/obtenerTodos',llamada.obtenerTodos);
router.post('/insertar',llamada.Insertar);
router.post('/update',llamada.Update);
router.post('/delete',llamada.Delete);
module.exports = router;

