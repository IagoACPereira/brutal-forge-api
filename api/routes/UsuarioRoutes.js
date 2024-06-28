const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');

const usuarioRouter = Router();

usuarioRouter
  .post('/usuarios/', UsuarioController.adicionar)
  .get('/usuarios/', UsuarioController.exibirTodos)
  .get('/usuarios/:id', UsuarioController.exibirUm)
  .put('/usuarios/:id', UsuarioController.atualizar)
  .delete('/usuarios/:id', UsuarioController.deletar);

module.exports = usuarioRouter;
