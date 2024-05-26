const { DataTypes } = require('sequelize');
const sequelize = require('../config/conexaoDb');
const Artista = require('./Artista');
const Gravadora = require('./Gravadora');

const Album = sequelize.define('albuns', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dataLancamento: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  imagem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

Artista.hasMany(Album, {
  foreignKey: 'artistaId'
});
Album.belongsTo(Artista, {
  foreignKey: 'artistaId'
});
Gravadora.hasMany(Album, {
  foreignKey: 'gravadoraId'
});
Album.belongsTo(Gravadora, {
  foreignKey: 'gravadoraId'
});

// Album.sync({ force: true });

module.exports = Album;
