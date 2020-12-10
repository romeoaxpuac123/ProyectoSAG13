'use strict';
var bodyParser = require('body-parser');
var log = require('morgan');
require('dotenv').config();
const express = require('express');
const puerto =process.env.PORT|| 4000;
const aplicacion = express();
var path = require('path');
const cors = require('cors');
const route = require('./routes/routes');
aplicacion.use(express.urlencoded({extended:false}));
aplicacion.use('/catalogo',route);
aplicacion.use(cors());
aplicacion.use(log('dev'));

aplicacion.listen(puerto,function(){
    console.log('Escuchando en puerto 4000');
});

