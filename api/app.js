import express from 'express';
import routes from './routes/index.js';

const app = express();

app
  .use(
    express.json(),
    express.urlencoded({
      extended: true,
    }),
  );

routes(app);

export default app;
