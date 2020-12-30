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

router.post('/MostrarProductos3', (req, res) => {
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