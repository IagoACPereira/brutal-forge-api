const { DataTypes } = require('sequelize');
const sequelize = require('../config/conexaoDb');

const Genero = sequelize.define('genero', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

module.exports = Genero;
