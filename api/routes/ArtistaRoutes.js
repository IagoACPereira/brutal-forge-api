const { Router } = require('express');
const ArtistaController = require('../controllers/ArtistaController');
const validaToken = require('../middlewares/validaToken');

const artistaRouter = Router();

artistaRouter
  .post('/artistas/', validaToken, ArtistaController.adicionar)
  .get('/artistas/', ArtistaController.exibirTodos)
  .get('/artistas/:id/', ArtistaController.exibirUm)
  .put('/artistas/:id/', validaToken, ArtistaController.atualizar)
  .delete('/artistas/:id/', validaToken, ArtistaController.deletar);

module.exports = artistaRouter;