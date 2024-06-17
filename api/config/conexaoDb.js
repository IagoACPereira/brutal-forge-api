const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  host: process.env.HOSTDB,
  port: process.env.PORTADB,
  database: process.env.DATABASE,
  username: process.env.USERDB,
  password: process.env.PASSDB,
  dialect: process.env.DIALECT,
});

try {
  sequelize.authenticate();
  console.log('Conexão com o banco ok!');
} catch (error) {
  console.log('Conexão com o banco mau sucedida');
}

module.exports = sequelize;
