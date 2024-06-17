const { DataTypes } = require('sequelize');
const sequelize = require('../config/conexaoDb');

const Pais = sequelize.define('pais', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  timestamps: false,
  freezeTableName: true,
});

// Pais.sync({ force: true });

module.exports = Pais;
