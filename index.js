require('dotenv').config()
const app = require("./src/app");
const sequelize = require('./src/config/conexaoDb');

const porta = process.env.PORTA;

app.listen(porta, () => console.log(`Servidor ok | http://localhost:${porta}`));
