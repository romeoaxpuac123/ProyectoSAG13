const express = require("express");
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    res.send("grupo 13");
});

router.post('/AgregarACarrito', (req, res) => {
    axios.post('http://34.121.67.41:7003/AgregarACarrito', req.body)
        .then((response) => {
            if (response['data']) {
                const respuesta = response['data'];
                res.json(respuesta);
            } else {
                res.json({ "msg": false, "user": 0, "producto": "error" });
            }
        })
        .catch((error) => {
            res.json({ "msg": false, "user": 0, "producto": "error" });
        });
});

router.post('/EliminarCarrito', (req, res) => {
    axios.post('http://34.121.67.41:7003/EliminarCarrito', req.body)
        .then((response) => {
            if (response['data']) {
                const respuesta = response['data'];
                res.json(respuesta);
            } else {
                res.json({ "msg": false, "user": 0, "id": "error" });
            }
        })
        .catch((error) => {
            res.json({ "msg": false, "user": 0, "id": "error" });
        });
});

router.post('/MiCarrito', (req, res) => {
    axios.post('http://34.121.67.41:7003/MiCarrito', req.body)
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

router.post('/Stock', (req, res) => {
    axios.post('http://34.121.67.41:7003/Stock', req.body)
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

router.post('/Factura', (req, res) => {
    axios.post('http://34.121.67.41:7003/Factura', req.body)
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

router.post('/Ventas', (req, res) => {
    axios.post('http://34.121.67.41:7003/Ventas', req.body)
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