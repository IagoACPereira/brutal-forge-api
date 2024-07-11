const { Router } = require('express');
const FaixaController = require('../controllers/FaixaController');
const validaToken = require('../middlewares/validaToken');
const validaPermissao = require('../middlewares/validaPermissao');

const faixaRouter = Router();

faixaRouter
  .post('/faixas/', validaToken, validaPermissao(['manipulacao', 'admin']), FaixaController.adicionar)
  .get('/faixas/', FaixaController.exibirTodos)
  .get('/faixas/:id/', FaixaController.exibirUm)
  .put('/faixas/:id/', validaToken, validaPermissao(['manipulacao', 'admin']), FaixaController.atualizar)
  .delete('/faixas/:id/', validaToken, validaPermissao(['manipulacao', 'admin']), FaixaController.deletar);

module.exports = faixaRouter;
