const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const validaToken = require('../middlewares/validaToken');
const validaPermissao = require('../middlewares/validaPermissao');

const usuarioRouter = Router();

usuarioRouter
  .post('/usuarios/', validaToken, UsuarioController.adicionar)
  .get('/usuarios/', validaToken, validaPermissao(['admin']), UsuarioController.exibirTodos)
  .get('/usuarios/:id', validaToken, validaPermissao(['admin']), UsuarioController.exibirUm)
  .put('/usuarios/:id', validaToken, validaPermissao(['admin']), UsuarioController.atualizar)
  .delete('/usuarios/:id', validaToken, validaPermissao(['admin']), UsuarioController.deletar);

module.exports = usuarioRouter;
