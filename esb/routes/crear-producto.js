const express = require("express");
const router = express.Router();
const axios = require('axios');

router.post('/crear-producto-cliente', (req, res) => {
    axios.post('http://34.121.67.41:9009/crear-producto-cliente', req.body)
        .then((response) => {
            res.send(response['data']);
        })
        .catch((error) => {
            res.send(error['response']['data']);
        });
});

router.post('/crear-producto-proveedor', (req, res) => {
    axios.post('http://34.121.67.41:9009/crear-producto-proveedor', req.body)
        .then((response) => {
            res.send(response['data']);
        })
        .catch((error) => {
            res.send(error['response']['data']);
        });
});

module.exports = router;