const express = require("express");
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    res.send("grupo 13");
});

router.post('/registrar-cliente', (req, res) => {
    if (!req.body['apellido']) {
        req.body['apellido'] = '-';
    }
    if (!req.body['celular']) {
        req.body['celular'] = '-';
    }
    axios.post('http://34.121.67.41:9009/registrar-cliente', req.body)
        .then((response) => {
            if (response['data']) {
                const respuesta = response['data'];
                res.status(respuesta['code']);
                res.json({
                    status: respuesta['status'],
                    data: respuesta['data'],
                    message: respuesta['message']
                })
            } else {
                res.status(500);
                res.json({
                    status: "error",
                    message: "Ocurrió un error inesperado"
                });
            }
        })
        .catch((error) => {
            res.status(500);
            res.json({
                status: "error",
                message: "Ocurrió un error inesperado"
            });
        });
});

router.post('/registrar-proveedor', (req, res) => {
    if (!req.body['apellido']) {
        req.body['apellido'] = '-';
    }
    if (!req.body['direccion']) {
        req.body['direccion'] = '-';
    }
    axios.post('http://34.121.67.41:9009/registrar-proveedor', req.body)
        .then((response) => {
            if (response['data']) {
                const respuesta = response['data'];
                res.status(respuesta['code']);
                res.json({
                    status: respuesta['status'],
                    data: respuesta['data'],
                    message: respuesta['message']
                })
            } else {
                res.status(500);
                res.json({
                    status: "error",
                    message: "Ocurrió un error inesperado"
                });
            }
        })
        .catch((error) => {
            res.status(500);
            res.json({
                status: "error",
                message: "Ocurrió un error inesperado"
            });
        });
});

router.post('/login-cliente', (req, res) => {
    axios.post('http://34.121.67.41:9009/login-cliente', req.body)
        .then((response) => {
            if (response['data']) {
                const respuesta = response['data'];
                res.status(respuesta['code']);
                res.json({
                    status: respuesta['status'],
                    data: respuesta['data'],
                    message: respuesta['message']
                })
            } else {
                res.status(500);
                res.json({
                    status: "error",
                    message: "Ocurrió un error inesperado"
                });
            }
        })
        .catch((error) => {
            res.status(500);
            res.json({
                status: "error",
                message: "Ocurrió un error inesperado"
            });
        });
});

router.post('/login-proveedor', (req, res) => {
    axios.post('http://34.121.67.41:9009/login-proveedor', req.body)
        .then((response) => {
            if (response['data']) {
                const respuesta = response['data'];
                res.status(respuesta['code']);
                res.json({
                    status: respuesta['status'],
                    data: respuesta['data'],
                    message: respuesta['message']
                })
            } else {
                res.status(500);
                res.json({
                    status: "error",
                    message: "Ocurrió un error inesperado"
                });
            }
        })
        .catch((error) => {
            res.status(500);
            res.json({
                status: "error",
                message: "Ocurrió un error inesperado"
            });
        });
});

router.post('/crear-producto-cliente', (req, res) => {
    axios.post('http://34.121.67.41:9009/crear-producto-cliente', req.body)
        .then((response) => {
            if (response['data']) {
                const respuesta = response['data'];
                res.status(respuesta['code']);
                res.json({
                    status: respuesta['status'],
                    data: respuesta['data'],
                    message: respuesta['message']
                })
            } else {
                res.status(500);
                res.json({
                    status: "error",
                    message: "Ocurrió un error inesperado"
                });
            }
        })
        .catch((error) => {
            res.status(500);
            res.json({
                status: "error",
                message: "Ocurrió un error inesperado"
            });
        });
});

router.post('/crear-producto-proveedor', (req, res) => {
    axios.post('http://34.121.67.41:9009/crear-producto-proveedor', req.body)
        .then((response) => {
            if (response['data']) {
                const respuesta = response['data'];
                res.status(respuesta['code']);
                res.json({
                    status: respuesta['status'],
                    data: respuesta['data'],
                    message: respuesta['message']
                })
            } else {
                res.status(500);
                res.json({
                    status: "error",
                    message: "Ocurrió un error inesperado"
                });
            }
        })
        .catch((error) => {
            res.status(500);
            res.json({
                status: "error",
                message: "Ocurrió un error inesperado"
            });
        });
});

router.get('/ver-productos', (req, res) => {
    axios.get('http://34.121.67.41:9009/ver-productos')
        .then((response) => {
            if (response['data']) {
                const respuesta = response['data'];
                res.status(respuesta['code']);
                res.json({
                    status: respuesta['status'],
                    data: respuesta['data'],
                    message: respuesta['message']
                })
            } else {
                res.status(500);
                res.json({
                    status: "error",
                    message: "Ocurrió un error inesperado"
                });
            }
        })
        .catch((error) => {
            res.status(500);
            res.json({
                status: "error",
                message: "Ocurrió un error inesperado"
            });
        });
});

router.get('/ver-producto', (req, res) => {
    const id_producto = req.query['id_producto'];
    axios.get(`http://34.121.67.41:9009/ver-productos?id_producto=${id_producto}`)
        .then((response) => {
            if (response['data']) {
                const respuesta = response['data'];
                let d = respuesta['data'];
                if (d instanceof Array && d.length > 0) {
                    d = d[0];
                }
                res.status(respuesta['code']);
                res.json({
                    status: respuesta['status'],
                    data: d,
                    message: respuesta['message']
                })
            } else {
                res.status(500);
                res.json({
                    status: "error",
                    message: "Ocurrió un error inesperado"
                });
            }
        })
        .catch((error) => {
            res.status(500);
            res.json({
                status: "error",
                message: "Ocurrió un error inesperado"
            });
        });
});

router.post('/realizar-compra', (req, res) => {
    axios.post('http://34.121.67.41:9009/realizar-compra', req.body)
        .then((response) => {
            if (response['data']) {
                const respuesta = response['data'];
                res.status(respuesta['code']);
                res.json({
                    status: respuesta['status'],
                    data: respuesta['data'],
                    message: respuesta['message']
                })
            } else {
                res.status(500);
                res.json({
                    status: "error",
                    message: "Ocurrió un error inesperado"
                });
            }
        })
        .catch((error) => {
            res.status(500);
            res.json({
                status: "error",
                message: "Ocurrió un error inesperado"
            });
        });
});

module.exports = router;