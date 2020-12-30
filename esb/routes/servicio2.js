const express = require("express");
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    res.send("grupo 13");
});

router.post('/RegistrarProducto', (req, res) => {
    axios.post('http://34.121.67.41:4003/RegistrarProducto', req.body)
        .then((response) => {
            if (response['data']) {
                const respuesta = response['data'];
                res.json(respuesta);
            } else {
                res.json({ "msg": false, "tipo": "error", "user": 0, "name": "error" });
            }
        })
        .catch((error) => {
            res.json({ "msg": false, "tipo": "error", "user": 0, "name": "error" });
        });
});

router.post('/ActualizarProducto', (req, res) => {
    axios.post('http://34.121.67.41:4003/ActualizarProducto', req.body)
        .then((response) => {
            if (response['data']) {
                const respuesta = response['data'];
                res.json(respuesta);
            } else {
                res.json({ "msg": false, "tipo": "error", "user": 0, "name": "error" });
            }
        })
        .catch((error) => {
            res.json({ "msg": false, "tipo": "error", "user": 0, "name": "error" });
        });
});

router.post('/EliminarProducto', (req, res) => {
    axios.post('http://34.121.67.41:4003/EliminarProducto', req.body)
        .then((response) => {
            if (response['data']) {
                const respuesta = response['data'];
                res.json(respuesta);
            } else {
                res.json({ "msg": false, "tipo": "error", "user": 0, "name": "error" });
            }
        })
        .catch((error) => {
            res.json({ "msg": false, "tipo": "error", "user": 0, "name": "error" });
        });
});

router.post('/MostrarProductos', (req, res) => {
    axios.post('http://34.121.67.41:4003/MostrarProductos', req.body)
        .then((response) => {
            if (response['data']) {
                const respuesta = response['data'];
                res.json(respuesta);
            } else {
                res.json({ "msg": false, "tipo": "error", "user": 0, "name": "error" });
            }
        })
        .catch((error) => {
            res.json({ "msg": false, "tipo": "error", "user": 0, "name": "error" });
        });
});

module.exports = router;