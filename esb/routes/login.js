const express = require("express");
const router = express.Router();
const axios = require('axios');

router.post('/login-cliente', (req, res) => {
    axios.post('http://34.121.67.41:9009/login-cliente', req.body)
        .then((response) => {
            res.send(response['data']);
        })
        .catch((error) => {
            res.send(error['response']['data']);
        });
});

router.post('/login-proveedor', (req, res) => {
    axios.post('http://34.121.67.41:9009/login-proveedor', req.body)
        .then((response) => {
            res.send(response['data']);
        })
        .catch((error) => {
            res.send(error['response']['data']);
        });
});

module.exports = router;