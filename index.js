import 'dotenv/config';
import app from './api/app.js';

const porta = process.env.PORTA;

app
  // eslint-disable-next-line no-console
  .listen(porta, () => console.log(`API rodando em http://localhost:${porta}/api/`));
