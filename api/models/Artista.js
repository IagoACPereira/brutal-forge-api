const { DataTypes } = require('sequelize');
const sequelize = require('../config/conexaoDb');
const Genero = require('./Genero');
const Pais = require('./Pais');

const Artista = sequelize.define('artista', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dataFormacao: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  ativo: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
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

Genero.hasMany(Artista, {
  foreignKey: 'generoId'
});
Artista.belongsTo(Genero, {
  foreignKey: 'generoId'
});
Pais.hasMany(Artista, {
  foreignKey: 'paisId',
});
Artista.belongsTo(Pais, {
  foreignKey: 'paisId',
  as: 'paisArtista'
});

// Artista.sync({ force: true });

module.exports =  Artista;
