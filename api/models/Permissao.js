const { DataTypes } = require("sequelize");
const sequelize = require("../config/conexaoDb");

const Permissao = sequelize.define('permissao', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

module.exports = Permissao;
