import sequelize from '../config/conexaoDb.js';
import Artista from './Artista.js';
import Genero from './Genero.js';

const GeneroArtista = sequelize.define('genero_artista', {}, {
  freezeTableName: true,
});

Genero.hasMany(GeneroArtista, {
  foreignKey: 'id_genero',
});
GeneroArtista.belongsTo(Genero, {
  foreignKey: 'id_genero',
});
Artista.hasMany(GeneroArtista, {
  foreignKey: 'id_artista',
});
GeneroArtista.belongsTo(Artista, {
  foreignKey: 'id_artista',
});

GeneroArtista.sync({ force: true });

export default GeneroArtista;
