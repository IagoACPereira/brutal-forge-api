const app = require("./src/app");

const porta = process.env.PORTA;

app.listen(porta, () => console.log(`| Servidor ok | http://localhost:${porta}`));
