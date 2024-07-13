const { body } = require('express-validator');
const { Router } = require('express');
const AuthController = require('../controllers/AuthController');

const authRouter = Router();

authRouter
  .post('/auth', [
    body('email').notEmpty().withMessage('Campo "Email" não pode ser vazio'),
    body('senha').notEmpty().withMessage('Campo "Senha" não pode ser vazio'),
  ], AuthController.autenticar);

module.exports = authRouter;
