const { DataTypes } = require("sequelize");
const sequelize = require("../config/conexaoDb");
const Usuario = require("./Usuario");

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

Permissao.hasMany(Usuario, {
  foreignKey: 'id_permissao'
});
Usuario.belongsTo(Permissao, {
  foreignKey: 'id_permissao'
});

module.exports = Permissao;
