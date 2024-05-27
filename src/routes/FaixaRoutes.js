const { Router } = require('express');
const FaixaController = require('../controllers/FaixaController');

const faixaRouter = Router();

faixaRouter
  .post('/faixas/', FaixaController.adicionar)
  .get('/faixas/', FaixaController.exibirTodos)
  .get('/faixas/:id/', FaixaController.exibirUm)
  .put('/faixas/:id/', FaixaController.atualizar)
  .delete('/faixas/:id/', FaixaController.deletar);

module.exports = faixaRouter;
