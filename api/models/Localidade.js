import { DataTypes } from 'sequelize';
import sequelize from '../config/conexaoDb.js';
import Pais from './Pais.js';

const Localidade = sequelize.define('localidade', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  uf: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  freezeTableName: true,
});

Pais.hasMany(Localidade, {
  foreignKey: 'id_pais',
});
Localidade.belongsTo(Pais, {
  foreignKey: 'id_pais',
});

Localidade.sync({ force: true });

export default Localidade;
