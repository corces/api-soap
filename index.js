const soap = require('soap');
const express = require('express');
const fs = require('fs');
const User = require('./models/usuario');
const { response } = require('express');
const port = 8001;


const validar = {
    validar_Service: {
        validar_Port: {
            confirmarUsuario: (args, callback) => {

                User.update({ confirmado: 1 }, { where: { id: args.rut.$value } })
                .then(response => {
                    callback({
                        confirmado: 'Usuario valiado'
                    });
                });
            },
            validarUsuario: (args, callback) => {
                User.findAll({ where: { rut: args.rut.$value } })
                .then(response => {
                    callback({
                        validado: response.length
                    });
                });
            },
        }
    }
};

var xml = fs.readFileSync('service.wsdl', 'utf8');
var app = express();

app.listen(port, function () {
    console.log('Listening on port ' + port);
    var wsdl_path = "/wsdl";
    soap.listen(app, wsdl_path, validar, xml);
});