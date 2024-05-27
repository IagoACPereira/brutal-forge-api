const express = require('express');
const paisRouter = require('./routes/PaisRoutes');
const generoRouter = require('./routes/GeneroRoutes');
const gravadoraRouter = require('./routes/GravadoraRoutes');
const artistaRouter = require('./routes/ArtistaRoutes');
const albumRouter = require('./routes/AlbumRoutes');
const faixaRouter = require('./routes/FaixaRoutes');

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
  .use(
    paisRouter,
    generoRouter,
    gravadoraRouter,
    artistaRouter,
    albumRouter,
    faixaRouter,
  );

module.exports = app;
