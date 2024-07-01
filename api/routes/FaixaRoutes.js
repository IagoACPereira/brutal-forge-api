const { Router } = require('express');
const FaixaController = require('../controllers/FaixaController');
const validaToken = require('../middlewares/validaToken');

const faixaRouter = Router();

faixaRouter
  .post('/faixas/', validaToken, FaixaController.adicionar)
  .get('/faixas/', FaixaController.exibirTodos)
  .get('/faixas/:id/', FaixaController.exibirUm)
  .put('/faixas/:id/', validaToken, FaixaController.atualizar)
  .delete('/faixas/:id/', validaToken, FaixaController.deletar);

module.exports = faixaRouter;
