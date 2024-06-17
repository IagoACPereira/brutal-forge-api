const { Router } = require('express');
const ArtistaController = require('../controllers/ArtistaController');

const artistaRouter = Router();

artistaRouter
  .post('/artistas/', ArtistaController.adicionar)
  .get('/artistas/', ArtistaController.exibirTodos)
  .get('/artistas/:id/', ArtistaController.exibirUm)
  .put('/artistas/:id/', ArtistaController.atualizar)
  .delete('/artistas/:id/', ArtistaController.deletar);

module.exports = artistaRouter;