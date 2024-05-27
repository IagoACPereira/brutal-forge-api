const { Router } = require('express');
const PaisController = require('../controllers/PaisController');

const paisRouter = Router();

paisRouter
  .post('/paises/', PaisController.adicionar)
  .get('/paises/', PaisController.exibirTodos)
  .get('/paises/:id/', PaisController.exibirUm)
  .put('/paises/:id/', PaisController.atualizar)
  .delete('/paises/:id/', PaisController.deletar);
  
module.exports = paisRouter;
