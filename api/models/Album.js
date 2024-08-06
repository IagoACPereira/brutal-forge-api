import { DataTypes } from 'sequelize';
import sequelize from '../config/conexaoDb.js';
import Artista from './Artista.js';
import Gravadora from './Gravadora.js';

const Album = sequelize.define('album', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lancamento: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  url_imagem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  curtidas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  descurtidas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  freezeTableName: true,
});

Artista.hasMany(Album, {
  foreignKey: 'id_artista',
});
Album.belongsTo(Artista, {
  foreignKey: 'id_artista',
});
Gravadora.hasMany(Album, {
  foreignKey: 'id_gravadora',
});
Album.belongsTo(Gravadora, {
  foreignKey: 'id_gravadora',
});

Album.sync({ force: true });

export default Album;
