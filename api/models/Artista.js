import { DataTypes } from 'sequelize';
import sequelize from '../config/conexaoDb.js';
import Localidade from './Localidade.js';

const Artista = sequelize.define('artista', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  formacao: {
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
  url_imagem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  freezeTableName: true,
});

Localidade.hasMany(Artista, {
  foreignKey: 'id_localidade',
});
Artista.belongsTo(Localidade, {
  foreignKey: 'id_localidade',
});

Artista.sync({ force: true });

export default Artista;
