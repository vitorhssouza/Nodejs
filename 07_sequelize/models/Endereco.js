const {DataTypes} = require('sequelize');
const db = require('../db/conn');
const Clube = require('./Clube')

const Endereco = db.define('Endereco', {
    logradouro: {type: DataTypes.STRING(1000), allowNull: false},
    cep: {type: DataTypes.STRING(8), allowNull: false},
    numero: {type: DataTypes.STRING(100), allowNull: false},
    complemento: {type: DataTypes.STRING(500), allowNull: true}
});

// Relacionamento de 1:1
Endereco.belongsTo(Clube)

// Relacionamento de 1:M 
Clube.hasMany(Endereco)

module.exports = Endereco