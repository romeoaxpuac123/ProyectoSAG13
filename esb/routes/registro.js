const express = require("express");
const router = express.Router();
const axios = require('axios');

router.post('/registrar-cliente', (req, res) => {
    axios.post('http://34.121.67.41:9009/registrar-cliente', req.body)
        .then((response) => {
            res.send(response['data']);
        })
        .catch((error) => {
            res.send(error['response']['data']);
        });
});

router.post('/registrar-proveedor', (req, res) => {
    axios.post('http://34.121.67.41:9009/registrar-proveedor', req.body)
        .then((response) => {
            res.send(response['data']);
        })
        .catch((error) => {
            res.send(error['response']['data']);
        });
});

module.exports = router;