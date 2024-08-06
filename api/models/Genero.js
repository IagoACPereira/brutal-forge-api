import { DataTypes } from 'sequelize';
import sequelize from '../config/conexaoDb.js';

const Genero = sequelize.define('genero', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  freezeTableName: true,
});

Genero.sync({ force: true });

export default Genero;
