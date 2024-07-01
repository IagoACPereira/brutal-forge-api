const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const validaToken = require('../middlewares/validaToken');

const usuarioRouter = Router();

usuarioRouter
  .post('/usuarios/', validaToken, UsuarioController.adicionar)
  .get('/usuarios/', validaToken, UsuarioController.exibirTodos)
  .get('/usuarios/:id', validaToken, UsuarioController.exibirUm)
  .put('/usuarios/:id', validaToken, UsuarioController.atualizar)
  .delete('/usuarios/:id', validaToken, UsuarioController.deletar);

module.exports = usuarioRouter;
