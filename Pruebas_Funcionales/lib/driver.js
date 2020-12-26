
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;


chai.use(chaiHttp);
const url = 'http://34.121.67.41:3003/';

describe('Pruebas Funcionales: ', () => {

    it('Registro de Cliente', (done) => {
        chai.request(url)
            .post('regisCliente')
            .send({ Nombre: "Jonnathan",Apellido: "Castillo",password:"56789", email: "jon@gmail.com", 
            celular: "46877446" ,fotografia:"No foto"  })
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });

    it('Login', (done) => {
        chai.request(url)
            .post('authCliente')
            .send({ email: "soyromeoaxpuac@gmail.com",pass: "1234" })
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });

});



