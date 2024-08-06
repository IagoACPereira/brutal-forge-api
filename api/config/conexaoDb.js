import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  storage: './api/config/forja-bruta.sqlite',
  dialect: 'sqlite',
});

sequelize.authenticate()
  // eslint-disable-next-line no-console
  .then(() => console.log('Conexão com o banco ok'))
  // eslint-disable-next-line no-console
  .catch(() => console.log('Conexão com o banco nok'));

export default sequelize;
