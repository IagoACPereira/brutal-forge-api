import { DataTypes } from 'sequelize';
import sequelize from '../config/conexaoDb.js';
import Album from './Album.js';

const Faixa = sequelize.define('faixa', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duracao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  num_faixa: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  letra: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  freezeTableName: true,
});

Album.hasMany(Faixa, {
  foreignKey: 'id_album',
});
Faixa.belongsTo(Album, {
  foreignKey: 'id_album',
});

Faixa.sync({ force: true });

export default Faixa;
