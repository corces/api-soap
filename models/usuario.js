

const Sequelize = require('sequelize');
const db = require('../config/database');

const Usuario = db.define('usuarios', {
    nombre: {
        type: Sequelize.STRING
    },
    rut: {
        type: Sequelize.STRING
    },
    telefono: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    confirmado: {
        type: Sequelize.BOOLEAN
    }
},{
    timestamps: false
});

module.exports = Usuario;