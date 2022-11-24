const db = require('../db/conn');

// criando uma entidade no banco de dados
const {DataTypes} = require('sequelize');

const Clube = db.define('Clube', {
    nome: {type: DataTypes.STRING(100), allowNull: false},
    status: {type: DataTypes.BOOLEAN, allowNull: false}
});

module.exports = Clube;
