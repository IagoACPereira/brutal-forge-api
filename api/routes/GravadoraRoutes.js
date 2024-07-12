const { body } = require('express-validator');
const { Router } = require('express');
const GravadoraController = require('../controllers/GravadoraController');
const validaToken = require('../middlewares/validaToken');
const validaPermissao = require('../middlewares/validaPermissao');

const gravadoraRouter = Router();

gravadoraRouter
  .post(
    '/gravadoras/',
    validaToken,
    validaPermissao(['manipulacao', 'admin']),
    [
      body('nome').notEmpty().withMessage('Campo "Nome" não pode ser vazio'),
      body('imagem').notEmpty().withMessage('Campo "URL da Imagem" não pode ser vazio'),
      body('imagem').isURL().withMessage('Campo "URL da Imagem" deve ser uma URL válida'),
      body('paisId').notEmpty().withMessage('Campo "Pais Origem" não pode ser vazio'),
      body('paisId').isNumeric().withMessage('Campo "Pais Origem" deve ser um valor numérico'),
    ],
    GravadoraController.adicionar,
  )
  .get('/gravadoras/', GravadoraController.exibirTodos)
  .get('/gravadoras/:id/', GravadoraController.exibirUm)
  .put(
    '/gravadoras/:id/',
    validaToken,
    validaPermissao(['manipulacao', 'admin']),
    [
      body('nome').notEmpty().withMessage('Campo "Nome" não pode ser vazio'),
      body('imagem').notEmpty().withMessage('Campo "URL da Imagem" não pode ser vazio'),
      body('imagem').isURL().withMessage('Campo "URL da Imagem" deve ser uma URL válida'),
      body('paisId').notEmpty().withMessage('Campo "Pais Origem" não pode ser vazio'),
      body('paisId').isNumeric().withMessage('Campo "Pais Origem" deve ser um valor numérico'),
    ],
    GravadoraController.atualizar,
  )
  .delete('/gravadoras/:id/', validaToken, validaPermissao(['manipulacao', 'admin']), GravadoraController.deletar);

module.exports = gravadoraRouter;
