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
INSERT INTO Proveedor (empresa,email,password,direccion)VALUES ('DOCH','proveedor@doch.com','1234','Guatemala City');

CREATE TABLE IF NOT EXISTS Cliente
(
    id_cliente int auto_increment,
    Nombre varchar(150),
    Apellido varchar(155),
    password varchar(20),
    email varchar(150),
    celular varchar(15),
    fotografia varchar(155),
    primary key(id_cliente)
);
INSERT INTO Cliente (Nombre,Apellido,password,email,celular,fotografia)VALUES ('Romeo','Axpuac','1234','romeo@gmail.com','12345','Foto1');

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

INSERT INTO Producto (Nombre,Precio_Venta,stock,categoria,imagen,precio_final,id_provedor)VALUES ('Vaso Vengadores',8.00,100,'Cocina','https://http2.mlstatic.com/D_NQ_NP_772229-MLA41917959738_052020-W.jpg',8.80,1);

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
