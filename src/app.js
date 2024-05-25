const express = require('express');

const app = express();

app
  .use(
    express.json(),
    express.urlencoded({
      extended: true,
    }),
  )
  .set('view engine', 'ejs')
  .set('views', `${__dirname}/views`)
  .get('/', (req, res) => res.status(200).json('Brutal Forge'))

module.exports = app;
