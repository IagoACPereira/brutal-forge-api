const { DataTypes } = require("sequelize");
const sequelize = require("../config/conexaoDb");

const Usuario = sequelize.define('usuario', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

module.exports = Usuario;
