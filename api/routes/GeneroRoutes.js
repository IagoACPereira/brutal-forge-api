const { Router } = require('express');
const { body } = require('express-validator');
const GeneroController = require('../controllers/GeneroController');
const validaToken = require('../middlewares/validaToken');
const validaPermissao = require('../middlewares/validaPermissao');

const generoRouter = Router();

generoRouter
  .post(
    '/generos/',
    validaToken,
    validaPermissao(['manipulacao', 'admin']),
    [
      body('nome').notEmpty().withMessage('Campo nome não deve ser vazio'),
    ],
    GeneroController.adicionar,
  )
  .get('/generos/', GeneroController.exibirTodos)
  .get('/generos/:id/', GeneroController.exibirUm)
  .put(
    '/generos/:id/',
    validaToken,
    validaPermissao(['manipulacao', 'admin']),
    [
      body('nome').notEmpty().withMessage('Campo nome não deve ser vazio'),
    ],
    GeneroController.atualizar,
  )
  .delete('/generos/:id/', validaToken, validaPermissao(['manipulacao', 'admin']), GeneroController.deletar);

module.exports = generoRouter;
