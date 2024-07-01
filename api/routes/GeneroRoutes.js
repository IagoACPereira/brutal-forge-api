const { Router } = require('express');
const GeneroController = require('../controllers/GeneroController');
const validaToken = require('../middlewares/validaToken');

const generoRouter = Router();

generoRouter
  .post('/generos/', validaToken, GeneroController.adicionar)
  .get('/generos/', GeneroController.exibirTodos)
  .get('/generos/:id/', GeneroController.exibirUm)
  .put('/generos/:id/', validaToken, GeneroController.atualizar)
  .delete('/generos/:id/', validaToken, GeneroController.deletar);

module.exports = generoRouter;
