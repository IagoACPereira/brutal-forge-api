const { Router } = require('express');
const AuthController = require('../controllers/AuthController');

const authRouter = Router();

authRouter
  .post('/auth', AuthController.autenticar);

module.exports = authRouter;
