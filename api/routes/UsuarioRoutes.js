const { body } = require('express-validator');
const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const validaToken = require('../middlewares/validaToken');
const validaPermissao = require('../middlewares/validaPermissao');

const usuarioRouter = Router();

usuarioRouter
  .post(
    '/usuarios/',
    [
      body('nome').notEmpty().withMessage('Campo "Nome" não pode ser vazio'),
      body('email').notEmpty().withMessage('Campo "Email" não pode ser vazio'),
      body('email').isEmail().withMessage('Campo "Email" deve ser um email válido'),
      body('telefone').notEmpty().withMessage('Campo "Telefone" não pode ser vazio'),
      body('senha').notEmpty().withMessage('Campo "Senha" não pode ser vazio'),
      body('senha').isStrongPassword().withMessage('Campo "Senha" deve conter: \r\n- Letras e números; \r\n- Ao menos uma letra maiúscula; \r\n-Ao menos um caractere especial; \r\n- No mínimo 2 caracteres numéricos.'),
      body('confirmacaoSenha').notEmpty().withMessage('Campo "Confirmação de Senha" não pode ser vazio'),
    ],
    UsuarioController.adicionar,
  )
  .get('/usuarios/', validaToken, validaPermissao(['admin']), UsuarioController.exibirTodos)
  .get('/usuarios/:id', validaToken, validaPermissao(['admin']), UsuarioController.exibirUm)
  .put(
    '/usuarios/:id',
    validaToken,
    validaPermissao(['admin']),
    [
      body('nome').notEmpty().withMessage('Campo "Nome" não pode ser vazio'),
      body('email').notEmpty().withMessage('Campo "Email" não pode ser vazio'),
      body('email').isEmail().withMessage('Campo "Email" deve ser um email válido'),
      body('telefone').notEmpty().withMessage('Campo "Telefone" não pode ser vazio'),
    ],
    UsuarioController.atualizar,
  )
  .delete('/usuarios/:id', validaToken, validaPermissao(['admin']), UsuarioController.deletar);

module.exports = usuarioRouter;
