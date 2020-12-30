const express = require("express");
const router = express.Router();
const axios = require('axios');
const ESB = require('light-esb-node');

router.get('/', (req, res) => {
    res.send("grupo 13");
});

let e = {};
let respuesta = {};

function esbCallback(error, message) {
    if (error) {
        e = error;
    } else {
        respuesta = message;
    }
}

var c1 = ESB.createLoggerComponent(esbCallback);
var c2 = ESB.createLoggerComponent(esbCallback);
var c9 = ESB.createVarComponent("datos", 'SET');
var c5 = ESB.createMapperComponent({ "hello": ["XYZ.hello", "ZZZ.hello"] });
var c6 = ESB.createLoggerComponent(esbCallback);
var c7 = ESB.createVarComponent("customerInfo", 'SET');
var c8 = ESB.createLoggerComponent(esbCallback);
var c10 = ESB.createVarComponent("customerData", 'GET');
var c11 = ESB.createLoggerComponent(esbCallback);
var c12 = ESB.createCombineComponent("customerInfo");
var c13 = ESB.createLoggerComponent(esbCallback);

router.post('/registrar-cliente', (req, res) => {
    if (!req.body['apellido']) {
        req.body['apellido'] = '-';
    }
    if (!req.body['celular']) {
        req.body['celular'] = '-';
    }
    var c15 = ESB.createCallComponent(esbCallback, "http://34.121.67.41:9009/registrar-cliente", "post", {}, req.body);
    var c16 = ESB.createResultComponent(esbCallback);
    res.status(respuesta['code']);
    res.json({
        status: respuesta['status'],
        data: respuesta['data'],
        message: respuesta['message']
    })
});

router.post('/registrar-proveedor', (req, res) => {
    if (!req.body['apellido']) {
        req.body['apellido'] = '-';
    }
    if (!req.body['direccion']) {
        req.body['direccion'] = '-';
    }
    var c15 = ESB.createCallComponent(esbCallback, "http://34.121.67.41:9009/registrar-proveedor", "post", {}, req.body);
    var c16 = ESB.createResultComponent(esbCallback);
    res.status(respuesta['code']);
    res.json({
        status: respuesta['status'],
        data: respuesta['data'],
        message: respuesta['message']
    })
});

router.post('/login-cliente', (req, res) => {
    var c15 = ESB.createCallComponent(esbCallback, "http://34.121.67.41:9009/login-cliente", "post", {}, req.body);
    var c16 = ESB.createResultComponent(esbCallback);
    res.status(respuesta['code']);
    res.json({
        status: respuesta['status'],
        data: respuesta['data'],
        message: respuesta['message']
    })
});

router.post('/login-proveedor', (req, res) => {
    var c15 = ESB.createCallComponent(esbCallback, "http://34.121.67.41:9009/login-proveedor", "post", {}, req.body);
    var c16 = ESB.createResultComponent(esbCallback);
    res.status(respuesta['code']);
    res.json({
        status: respuesta['status'],
        data: respuesta['data'],
        message: respuesta['message']
    })
});

router.post('/crear-producto-cliente', (req, res) => {
    var c15 = ESB.createCallComponent(esbCallback, "http://34.121.67.41:9009/crear-producto-cliente", "post", {}, req.body);
    var c16 = ESB.createResultComponent(esbCallback);
    res.status(respuesta['code']);
    res.json({
        status: respuesta['status'],
        data: respuesta['data'],
        message: respuesta['message']
    })
});

router.post('/crear-producto-proveedor', (req, res) => {
    var c15 = ESB.createCallComponent(esbCallback, "http://34.121.67.41:9009/crear-producto-proveedor", "post", {}, req.body);
    var c16 = ESB.createResultComponent(esbCallback);
    res.status(respuesta['code']);
    res.json({
        status: respuesta['status'],
        data: respuesta['data'],
        message: respuesta['message']
    })
});

router.get('/ver-productos', (req, res) => {
    var c15 = ESB.createCallComponent(esbCallback, "http://34.121.67.41:9009/ver-productos", "get");
    var c16 = ESB.createResultComponent(esbCallback);
    res.status(respuesta['code']);
    res.json({
        status: respuesta['status'],
        data: respuesta['data'],
        message: respuesta['message']
    })
});

router.get('/ver-producto', (req, res) => {
    var c15 = ESB.createCallComponent(esbCallback, `http://34.121.67.41:9009/ver-productos?id_producto=${id_producto}`, "get");
    var c16 = ESB.createResultComponent(esbCallback);
    res.status(respuesta['code']);
    res.json({
        status: respuesta['status'],
        data: respuesta['data'],
        message: respuesta['message']
    })
});

router.post('/realizar-compra', (req, res) => {
    var c15 = ESB.createCallComponent(esbCallback, "http://34.121.67.41:9009/realizar-compra", "post", {}, req.body);
    var c16 = ESB.createResultComponent(esbCallback);
    res.status(respuesta['code']);
    res.json({
        status: respuesta['status'],
        data: respuesta['data'],
        message: respuesta['message']
    })
});

module.exports = router;