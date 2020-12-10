var mysql = require('mysql');
const host = process.env.HOST || 'mysql-db';
const db = process.env.DB || 'ProyectoSA';
const user = 'root'; //process.env.USER ||
const password = 'grupo13'; //process.env.PASS || 

var conexion = mysql.createPool({
    connectionLimit: 10,
    host: host,
    port: 3306,
    user: user,
    password: password,
    database: db,
    multipleStatements: true
});



module.exports = conexion;
