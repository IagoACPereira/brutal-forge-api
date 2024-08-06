import { DataTypes } from 'sequelize';
import sequelize from '../config/conexaoDb.js';
import Localidade from './Localidade.js';

const Gravadora = sequelize.define('gravadora', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url_imagem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  freezeTableName: true,
});

Localidade.hasMany(Gravadora, {
  foreignKey: 'id_localidade',
});
Gravadora.belongsTo(Localidade, {
  foreignKey: 'id_localidade',
});

Gravadora.sync({ force: true });

export default Gravadora;
