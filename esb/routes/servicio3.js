const express = require("express");
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    res.send("grupo 13");
});

router.post('/MostrarProductos', (req, res) => {
    axios.post('http://34.121.67.41:5003/MostrarProductos', req.body)
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

router.post('/RegistrarTarjeta', (req, res) => {
    axios.post('http://34.121.67.41:5003/RegistrarTarjeta', req.body)
        .then((response) => {
            if (response['data']) {
                const respuesta = response['data'];
                res.json(respuesta);
            } else {
                res.json({ "msg": false, "user": 0, "tarjeta": "error" });
            }
        })
        .catch((error) => {
            res.json({ "msg": false, "user": 0, "tarjeta": "error" });
        });
});

router.post('/EliminarTarjeta', (req, res) => {
    axios.post('http://34.121.67.41:5003/EliminarTarjeta', req.body)
        .then((response) => {
            if (response['data']) {
                const respuesta = response['data'];
                res.json(respuesta);
            } else {
                res.json({ "msg": false, "user": 0, "tarjeta": "error" });
            }
        })
        .catch((error) => {
            res.json({ "msg": false, "user": 0, "tarjeta": "error" });
        });
});

router.post('/Tarjetas', (req, res) => {
    axios.post('http://34.121.67.41:5003/Tarjetas', req.body)
        .then((response) => {
            if (response['data']) {
                const respuesta = response['data'];
                res.json(respuesta);
            } else {
                res.json({ "msg": false, "user": 0, "tarjeta": "error" });
            }
        })
        .catch((error) => {
            res.json({ "msg": false, "user": 0, "tarjeta": "error" });
        });
});

router.post('/RegistrarProductoCliente', (req, res) => {
    axios.post('http://34.121.67.41:5003/RegistrarProductoCliente', req.body)
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

router.post('/ActualizarProductoCliente', (req, res) => {
    axios.post('http://34.121.67.41:5003/ActualizarProductoCliente', req.body)
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

router.post('/EliminarProductoCliente', (req, res) => {
    axios.post('http://34.121.67.41:5003/EliminarProductoCliente', req.body)
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

router.post('/MostrarProductosCliente', (req, res) => {
    axios.post('http://34.121.67.41:5003/MostrarProductosCliente', req.body)
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

router.post('/MostrarProductosParaVenderClientes', (req, res) => {
    axios.post('http://34.121.67.41:5003/MostrarProductosParaVenderClientes', req.body)
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