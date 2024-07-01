const { Router } = require('express');
const AlbumController = require('../controllers/AlbumController');
const validaToken = require('../middlewares/validaToken');

const albumRouter = Router();

albumRouter
  .post('/albuns/', validaToken, AlbumController.adicionar)
  .get('/albuns/:id/curtir', AlbumController.gostar)
  .get('/albuns/:id/descurtir', AlbumController.desgostar)
  .get('/albuns/:id/', AlbumController.exibirUm)
  .get('/albuns/', AlbumController.exibirTodos)
  .put('/albuns/:id/', validaToken, AlbumController.atualizar)
  .delete('/albuns/:id/', validaToken, AlbumController.deletar);

module.exports = albumRouter;
