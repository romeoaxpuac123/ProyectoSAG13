const express = require("express");
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    res.send("grupo 13");
});

router.post('/authProveedor', (req, res) => {
    axios.post('http://34.121.67.41:3003/authProveedor', req.body)
        .then((response) => {
            if (response['data']) {
                const respuesta = response['data'];
                res.json(respuesta);
            } else {
                res.json({ "msg": false, "user": 0, "name": "error", "email": "error", "direccion": "error" });
            }
        })
        .catch((error) => {
            res.json({ "msg": false, "user": 0, "name": "error", "email": "error", "direccion": "error" });
        });
});

router.post('/authCliente', (req, res) => {
    axios.post('http://34.121.67.41:3003/authCliente', req.body)
        .then((response) => {
            if (response['data']) {
                const respuesta = response['data'];
                res.json(respuesta);
            } else {
                res.json({ "msg": false, "user": 0, "name": "error", "email": "error", "direccion": "error" });
            }
        })
        .catch((error) => {
            res.json({ "msg": false, "user": 0, "name": "error", "email": "error", "direccion": "error" });
        });
});

router.post('/regisProveedor', (req, res) => {
    if (!req.body['apellido']) {
        req.body['apellido'] = '-';
    }
    if (!req.body['direccion']) {
        req.body['direccion'] = '-';
    }
    console.log(req.body);
    axios.post('http://34.121.67.41:3003/regisProveedor', req.body)
        .then((response) => {
            if (response['data']) {
                const respuesta = response['data'];
                res.json(respuesta);
            } else {
                res.json({ "msg": false, "user": 0, "name": "error", "email": "error", "direccion": "error" });
            }
        })
        .catch((error) => {
            res.json({ "msg": false, "user": 0, "name": "error", "email": "error", "direccion": "error" });
        });
});

router.post('/regisCliente', (req, res) => {
    if (!req.body['apellido']) {
        req.body['apellido'] = '-';
    }
    if (!req.body['celular']) {
        req.body['celular'] = '-';
    }
    console.log(req.body);
    axios.post('http://34.121.67.41:3003/regisCliente', req.body)
        .then((response) => {
            if (response['data']) {
                const respuesta = response['data'];
                res.json(respuesta);
            } else {
                res.json({ "msg": false, "user": 0, "name": "error", "email": "error", "direccion": "error" });
            }
        })
        .catch((error) => {
            res.json({ "msg": false, "user": 0, "name": "error", "email": "error", "direccion": "error" });
        });
});

module.exports = router;