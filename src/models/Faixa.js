const { DataTypes } = require('sequelize');
const sequelize = require('../config/conexaoDb');
const Album = require('./Album');

const Faixa = sequelize.define('faixas', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duracao: { // minutos
    type: DataTypes.STRING,
    allowNull: false,
  },
  numFaixa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Album.hasMany(Faixa, {
  foreignKey: 'albumId',
});
Faixa.belongsTo(Album, {
  foreignKey: 'albumId',
});

// Faixa.sync({ force: true });

module.exports = Faixa;
