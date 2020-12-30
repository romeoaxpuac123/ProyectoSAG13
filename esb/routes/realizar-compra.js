const express = require("express");
const router = express.Router();
const axios = require('axios');

router.post('/realizar-compra', (req, res) => {
    axios.post('http://34.121.67.41:9009/realizar-compra', req.body)
        .then((response) => {
            res.send(response['data']);
        })
        .catch((error) => {
            res.send(error['response']['data']);
        });
});

module.exports = router;