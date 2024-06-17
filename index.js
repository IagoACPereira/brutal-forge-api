require('dotenv').config()
const app = require("./api/app");

const porta = process.env.PORTA;

app.listen(porta, () => console.log(`Servidor ok | http://localhost:${porta}`));