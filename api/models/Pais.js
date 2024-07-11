const { DataTypes } = require('sequelize');
const sequelize = require('../config/conexaoDb');

const Pais = sequelize.define('pais', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

module.exports = Pais;
