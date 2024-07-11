const { Router } = require('express');
const GeneroController = require('../controllers/GeneroController');
const validaToken = require('../middlewares/validaToken');

const generoRouter = Router();

generoRouter
  .post('/generos/', validaToken, validaPermissao(['manipulacao', 'admin']), GeneroController.adicionar)
  .get('/generos/', GeneroController.exibirTodos)
  .get('/generos/:id/', GeneroController.exibirUm)
  .put('/generos/:id/', validaToken, validaPermissao(['manipulacao', 'admin']), GeneroController.atualizar)
  .delete('/generos/:id/', validaToken, validaPermissao(['manipulacao', 'admin']), GeneroController.deletar);

module.exports = generoRouter;
