const express = require('express');
const cors = require('cors');
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
  .get('/', cors(), async (req, res) => {
    try {
      res.status(200).json({
        mensagem: 'Brutal Forge API',
        status: 200,
      })
    } catch (error) {
      res.status(400).json({
        mensagem: error.messege,
        status: 400,
      });
    }
  })
  .use(
    cors(),
    paisRouter,
    generoRouter,
    gravadoraRouter,
    artistaRouter,
    albumRouter,
    faixaRouter,
  );

module.exports = app;