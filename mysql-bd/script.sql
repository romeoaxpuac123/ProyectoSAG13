CREATE DATABASE IF NOT EXISTS ProyectoSA;

USE ProyectoSA;

CREATE TABLE IF NOT EXISTS Proveedor 
(
    id_provedor int primary key auto_increment,
    empresa varchar(155),
    email varchar(255),
    password varchar(15),
    direccion varchar(155)
);

CREATE TABLE IF NOT EXISTS Cliente
(
    id_cliente int auto_increment,
    Nombre varchar(150),
    Apellido varchar(155),
    Password varchar(20),
    email varchar(150),
    celular varchar(15),
    fotografia varchar(155),
    primary key(id_cliente)
);

CREATE TABLE IF NOT EXISTS Tarjeta
(
    id_tarjeta int primary key auto_increment,
    No_Tarjeta int,
    id_cliente int,
    FOREIGN KEY (id_cliente) REFERENCES Cliente(id_cliente)
);

CREATE TABLE IF NOT EXISTS Producto
(
    id_Producto int primary key auto_increment,
    Nombre varchar(155),
    Precio_Venta double,
    stock int,
    categoria varchar(55),
    imagen varchar(255),
    precio_final double,
    id_provedor int,
    FOREIGN KEY (id_provedor) REFERENCES Proveedor(id_provedor)

);

CREATE TABLE IF NOT EXISTS Carrito
(
    id_carrito int primary key auto_increment,
    id_cliente int,
    id_Producto int,
    cantidad int,
    subtotal double,
    FOREIGN KEY (id_cliente) REFERENCES Cliente(id_cliente),
    FOREIGN KEY (id_Producto) REFERENCES Producto(id_Producto)
);

CREATE TABLE IF NOT EXISTS Factura
(
    id_factura int primary key auto_increment,
    id_cliente int,
    fecha date,
    total double,
    FOREIGN KEY (id_cliente) REFERENCES Cliente(id_cliente)
);

CREATE TABLE IF NOT EXISTS Venta
(
    id_venta int primary key auto_increment,
    id_factura int,
    id_Producto int,
    cantidad int,
    subtotal double,
    FOREIGN KEY (id_factura) REFERENCES Factura(id_factura),
    FOREIGN KEY (id_Producto) REFERENCES Producto(id_Producto)
);


ALTER USER 'root' IDENTIFIED WITH mysql_native_password by 'grupo13';
GRANT ALL PRIVILEGES ON *.* to 'root'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;
