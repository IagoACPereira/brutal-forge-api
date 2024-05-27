const { Router } = require('express');
const AlbumController = require('../controllers/AlbumController');

const albumRouter = Router();

albumRouter
  .post('/albuns/', AlbumController.adicionar)
  .get('/albuns/', AlbumController.exibirTodos)
  .get('/albuns/:id/', AlbumController.exibirUm)
  .put('/albuns/:id/', AlbumController.atualizar)
  .delete('/albuns/:id/', AlbumController.deletar);

module.exports = albumRouter;
