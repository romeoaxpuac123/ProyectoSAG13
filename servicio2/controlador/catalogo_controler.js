const conexion = require('../Conexion/conexion');
const { FORMERR } = require('dns');

const obtenerTodos = (req, res) => {
    conexion.query('SELECT id_Producto as id, Nombre as nombre,precio_final as precio, imagen FROM Producto;', (er, rows) => {
        if (!er) {
            if (rows.length > 0) {
                res.json(rows);
            } else {
                res.json({});
            }
        } else {
            res.json(er);
            console.log(er);
        }
    });
}


const Insertar = (req, res) => {
    const { nombre, Precio_venta,stock, categoria, imagen,id_proveedor } = req.body;
    var precio_final = parseFloat(Precio_venta)+((parseFloat(Precio_venta)*10)/100);
    var strQuery = `INSERT INTO Producto(Nombre, Precio_Venta,stock, categoria, imagen,precio_final,id_proveedor) VALUES
                    ('${nombre}',${Precio_venta},${stock},'${categoria}','${imagen}',${precio_final},${id_proveedor});`;
    conexion.query(strQuery, [nombre, Precio_venta,stock, categoria, imagen,precio_final,id_proveedor], (er, rows) => {
        if (!er) {
            res.json({ "msg": true ,"user":1,"name":nombre});
        } else {
            res.json(er);
            console.log(er);
        }
    });
}

const Update = (req, res) => {
    const { id,nombre, Precio_venta,stock, categoria, imagen,id_proveedor } = req.body;
    var precio_final = parseFloat(Precio_venta)+((parseFloat(Precio_venta)*10)/100);
    var strQuery = `UPDATE Producto SET Nombre='${nombre}', Precio=${Precio_venta}, Stock=${stock} Categoria='${categoria}', imagen='${imagen}',
                    precio_final=${precio_final}, id_proveedor=${id_proveedor} WHERE id_producto=${id}`;
    conexion.query(strQuery, [nombre, Precio_venta,stock, categoria, imagen,precio_final,id_proveedor, id], (er, rows) => {
        if (!er) {
            res.json({ "msg": true ,"user":1,"name":nombre });
        } else {
            res.json(er);
            console.log(er);
        }
    });
}

const Delete = (req, res) => {
    const { id } = req.body;
    var strQuery = `DELETE FROM Producto  WHERE id_producto=${id}`;
    conexion.query(strQuery, [id], (er, rows) => {
        if (!er) {
            res.json({"msg": true ,"user":1,"name":id});
        } else {
            res.json(er);
            console.log(er);
        }
    });
}


module.exports = {
    obtenerTodos: obtenerTodos,
    Insertar : Insertar,
    Update : Update,
    Delete : Delete,
}
