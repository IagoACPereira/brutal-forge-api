const { Router } = require('express');
const GravadoraController = require('../controllers/GravadoraController');

const gravadoraRouter = Router();

gravadoraRouter
  .post('/gravadoras/', GravadoraController.adicionar)
  .get('/gravadoras/', GravadoraController.exibirTodos)
  .get('/gravadoras/:id/', GravadoraController.exibirUm)
  .put('/gravadoras/:id/', GravadoraController.atualizar)
  .delete('/gravadoras/:id/', GravadoraController.deletar);
  
module.exports = gravadoraRouter;
