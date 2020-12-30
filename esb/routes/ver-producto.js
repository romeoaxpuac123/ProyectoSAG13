const express = require("express");
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    const id_producto = req.query['id_producto'];
    let u = 'http://34.121.67.41:9009/ver-productos';
    if (id_producto) {
        u += `?id_producto=${id_producto}`;
    }
    axios.get(u)
        .then((response) => {
            res.send(response['data']);
        })
        .catch((error) => {
            res.send(error['response']['data']);
        });
});

module.exports = router;