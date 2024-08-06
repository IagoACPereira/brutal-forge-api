import { DataTypes } from 'sequelize';
import sequelize from '../config/conexaoDb.js';

const Pais = sequelize.define('pais', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  freezeTableName: true,
});

Pais.sync({ force: true });

export default Pais;
