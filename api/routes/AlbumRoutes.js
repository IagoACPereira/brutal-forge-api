const { Router } = require('express');
const AlbumController = require('../controllers/AlbumController');
const validaToken = require('../middlewares/validaToken');
const validaPermissao = require('../middlewares/validaPermissao');

const albumRouter = Router();

albumRouter
  .post('/albuns/', validaToken, validaPermissao(['manipulacao', 'admin']), AlbumController.adicionar)
  .get('/albuns/:id/curtir', AlbumController.gostar)
  .get('/albuns/:id/descurtir', AlbumController.desgostar)
  .get('/albuns/:id/', AlbumController.exibirUm)
  .get('/albuns/', AlbumController.exibirTodos)
  .put('/albuns/:id/', validaToken, validaPermissao(['manipulacao', 'admin']), AlbumController.atualizar)
  .delete('/albuns/:id/', validaToken, validaPermissao(['manipulacao', 'admin'])AlbumController.deletar);

module.exports = albumRouter;
