const { body } = require('express-validator');
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
    [
      body('nome').notEmpty().withMessage('Campo "Nome" não pode ser vazio'),
    ],
    PaisController.adicionar,
  )
  .get('/paises/', PaisController.exibirTodos)
  .get('/paises/:id/', PaisController.exibirUm)
  .put(
    '/paises/:id/',
    validaToken,
    validaPermissao(['manipulacao', 'admin']),
    [
      body('nome').notEmpty().withMessage('Campo "Nome" não pode ser vazio'),
    ],
    PaisController.atualizar,
  )
  .delete('/paises/:id/', validaToken, validaPermissao(['manipulacao', 'admin']), PaisController.deletar);

module.exports = paisRouter;
