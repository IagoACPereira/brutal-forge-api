const { Router } = require('express');
const PaisController = require('../controllers/PaisController');
const validaToken = require('../middlewares/validaToken');

const paisRouter = Router();

paisRouter
  .post('/paises/', validaToken, PaisController.adicionar)
  .get('/paises/', PaisController.exibirTodos)
  .get('/paises/:id/', PaisController.exibirUm)
  .put('/paises/:id/', validaToken, PaisController.atualizar)
  .delete('/paises/:id/', validaToken, PaisController.deletar);
  
module.exports = paisRouter;
