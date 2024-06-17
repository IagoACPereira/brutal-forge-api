const { Router } = require('express');
const GeneroController = require('../controllers/GeneroController');

const generoRouter = Router();

generoRouter
  .post('/generos/', GeneroController.adicionar)
  .get('/generos/', GeneroController.exibirTodos)
  .get('/generos/:id/', GeneroController.exibirUm)
  .put('/generos/:id/', GeneroController.atualizar)
  .delete('/generos/:id/', GeneroController.deletar);

module.exports = generoRouter;
