
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;


chai.use(chaiHttp);
const url = 'http://35.193.123.113:4003/';

describe('Pruebas correctas a servicio 2: ', () => {

    it('Obtener todos los productos', (done) => {
        chai.request(url)
            .post('MostrarProductos')
            .send({ id: 1 })
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });

    it('Insertar un producto', (done) => {
        chai.request(url)
            .post('RegistrarProducto')
            .send({ nombre: "Camisa",Precio_venta: "15.00",stock:"5", categoria: "Comida", 
                     imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/NCI_Visuals_Food_Hamburger.jpg/245px-NCI_Visuals_Food_Hamburger.jpg" ,
                     id_provedor:"1" })
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });

});

describe('Pruebas incorrectas a servicio 2: ', () => {
    it('Obtener producto inexistente', (done) => {
        chai.request(url)
            .post('urlinventada')
            .send({ id: "1" })
            .end(function (err, res) {
                expect(res).to.have.status(404);
                done();
            });
    });

    it('Borrar producto inexistente (1582155)', (done) => {
        chai.request(url)
            .post('/delete')
            .send({ id: "1582155" })
            .end(function (err, res) {
                expect(res).to.have.status(404);
                done();
            });
    });

});



