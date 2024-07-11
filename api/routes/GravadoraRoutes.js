const { Router } = require('express');
const GravadoraController = require('../controllers/GravadoraController');
const validaToken = require('../middlewares/validaToken');
const validaPermissao = require('../middlewares/validaPermissao');

const gravadoraRouter = Router();

gravadoraRouter
  .post('/gravadoras/', validaToken, validaPermissao(['manipulacao', 'admin']), GravadoraController.adicionar)
  .get('/gravadoras/', GravadoraController.exibirTodos)
  .get('/gravadoras/:id/', GravadoraController.exibirUm)
  .put('/gravadoras/:id/', validaToken, validaPermissao(['manipulacao', 'admin']), GravadoraController.atualizar)
  .delete('/gravadoras/:id/', validaToken, validaPermissao(['manipulacao', 'admin']), GravadoraController.deletar);

module.exports = gravadoraRouter;
