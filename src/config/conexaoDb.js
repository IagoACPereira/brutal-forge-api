const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  host: 'viaduct.proxy.rlwy.net',
  port: 44279,
  database: 'railway',
  username: 'postgres',
  password: 'QxXeotWkbtfdTsIGJkEzXbdOKOXbGrch',
  dialect: 'postgres',
});

try {
  sequelize.authenticate();
  console.log('Conexão com o banco ok!');
} catch (error) {
  console.log('Conexão com o banco mau sucedida');
}

module.exports = sequelize;
