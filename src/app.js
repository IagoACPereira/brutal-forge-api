const express = require('express');
const paisRouter = require('./routes/PaisRoutes');
const generoRouter = require('./routes/GeneroRoutes');
const gravadoraRouter = require('./routes/GravadoraRoutes');
const artistaRouter = require('./routes/ArtistaRoutes');
const albumRouter = require('./routes/AlbumRoutes');
const faixaRouter = require('./routes/FaixaRoutes');
const Album = require('./models/Album');

const app = express();

app
  .use(
    express.json(),
    express.urlencoded({
      extended: true,
    }),
  )
  .use('/public', express.static(`${__dirname}/public`))
  .set('view engine', 'ejs')
  .set('views', `${__dirname}/views`)
  .get('/', async (req, res) => {
    try {
      res.status(200).render('index.ejs')
    } catch (error) {
      res.status(400).json({
        mensagem: error.messege,
        status: 400,
      });
    }
  })
  .use(
    paisRouter,
    generoRouter,
    gravadoraRouter,
    artistaRouter,
    albumRouter,
    faixaRouter,
  );

module.exports = app;
