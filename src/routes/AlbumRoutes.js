const { Router } = require('express');
const AlbumController = require('../controllers/AlbumController');

const albumRouter = Router();

albumRouter
  .post('/albuns/', AlbumController.adicionar)
  .get('/albuns/:id/gostar', AlbumController.gostar)
  .get('/albuns/:id/desgostar', AlbumController.desgostar)
  .get('/albuns/:id/', AlbumController.exibirUm)
  .get('/albuns/', AlbumController.exibirTodos)
  .put('/albuns/:id/', AlbumController.atualizar)
  .delete('/albuns/:id/', AlbumController.deletar);

module.exports = albumRouter;
