const { DataTypes } = require('sequelize');
const sequelize = require('../config/conexaoDb');
const Pais = require('./Pais');

const Gravadora = sequelize.define('gravadora', {
  nome: {
    type: DataTypes.STRING,
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

Pais.hasMany(Gravadora, {
  foreignKey: 'paisId',
  as: 'paisGravadora',
})
Gravadora.belongsTo(Pais, {
  foreignKey: 'paisId',
  as: 'paisGravadora',
})

// Gravadora.sync({ force: true });

module.exports = Gravadora;
