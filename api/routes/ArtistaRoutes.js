const { Router } = require('express');
const ArtistaController = require('../controllers/ArtistaController');
const validaToken = require('../middlewares/validaToken');
const validaPermissao = require('../middlewares/validaPermissao');

const artistaRouter = Router();

artistaRouter
  .post('/artistas/', validaToken, validaPermissao(['manipulacao', 'admin']), ArtistaController.adicionar)
  .get('/artistas/', ArtistaController.exibirTodos)
  .get('/artistas/:id/', ArtistaController.exibirUm)
  .put('/artistas/:id/', validaToken, validaPermissao(['manipulacao', 'admin']), ArtistaController.atualizar)
  .delete('/artistas/:id/', validaToken, validaPermissao(['manipulacao', 'admin']), ArtistaController.deletar);

module.exports = artistaRouter;
