const { DataTypes } = require('sequelize');
const sequelize = require('../config/conexaoDb');

const Genero = sequelize.define('generos', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

// Genero.sync({ force: true });

module.exports = Genero;
