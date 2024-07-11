const { Router } = require('express');
const PaisController = require('../controllers/PaisController');
const validaToken = require('../middlewares/validaToken');
const validaPermissao = require('../middlewares/validaPermissao');

const paisRouter = Router();

paisRouter
  .post(
    '/paises/',
    validaToken,
    validaPermissao(['manipulacao', 'admin']),
    PaisController.adicionar,
  )
  .get('/paises/', PaisController.exibirTodos)
  .get('/paises/:id/', PaisController.exibirUm)
  .put(
    '/paises/:id/',
    validaToken,
    validaPermissao(['manipulacao', 'admin']),
    PaisController.atualizar,
  )
  .delete('/paises/:id/', validaToken, validaPermissao(['manipulacao', 'admin']), PaisController.deletar);

module.exports = paisRouter;
