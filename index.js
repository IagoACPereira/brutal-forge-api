require('dotenv').config();
const app = require('./api/app');

const porta = process.env.PORTA;

// eslint-disable-next-line no-console
app.listen(porta, () => console.log(`Servidor ok | http://localhost:${porta}`));
