const { DataTypes } = require('sequelize');
const sequelize = require('../config/conexaoDb');
const Album = require('./Album');

const Faixa = sequelize.define('faixa', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duracao: { // minutos
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  numFaixa: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

Album.hasMany(Faixa, {
  foreignKey: 'albumId',
});
Faixa.belongsTo(Album, {
  foreignKey: 'albumId',
});

// Faixa.sync({ force: true });

module.exports = Faixa;
