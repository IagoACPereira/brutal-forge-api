const { body } = require('express-validator');
const { Router } = require('express');
const FaixaController = require('../controllers/FaixaController');
const validaToken = require('../middlewares/validaToken');
const validaPermissao = require('../middlewares/validaPermissao');

const faixaRouter = Router();

faixaRouter
  .post(
    '/faixas/',
    validaToken,
    validaPermissao(['manipulacao', 'admin']),
    [
      body('titulo').notEmpty().withMessage('Campo "Título" não pode ser vazio'),
      body('duracao').notEmpty().withMessage('Campo "Duração" não pode ser vazio'),
      body('numFaixa').notEmpty().withMessage('Campo "Número da Faixa" não pode ser vazio'),
      body('numFaixa').isInt().withMessage('Campo "Número da Faixa" deve ser um número inteiro'),
      body('albumId').notEmpty().withMessage('Campo "Álbum" não pode ser vazio'),
      body('albumId').isInt().withMessage('Campo "ÁlbumId" deve ser um número inteiro'),
    ],
    FaixaController.adicionar,
  )
  .get('/faixas/', FaixaController.exibirTodos)
  .get('/faixas/:id/', FaixaController.exibirUm)
  .put(
    '/faixas/:id/',
    validaToken,
    validaPermissao(['manipulacao', 'admin']),
    [
      body('titulo').notEmpty().withMessage('Campo "Título" não pode ser vazio'),
      body('duracao').notEmpty().withMessage('Campo "Duração" não pode ser vazio'),
      body('numFaixa').notEmpty().withMessage('Campo "Número da Faixa" não pode ser vazio'),
      body('numFaixa').isInt().withMessage('Campo "Número da Faixa" deve ser um número inteiro'),
      body('albumId').notEmpty().withMessage('Campo "Álbum" não pode ser vazio'),
      body('albumId').isInt().withMessage('Campo "ÁlbumId" deve ser um número inteiro'),
    ],
    FaixaController.atualizar,
  )
  .delete('/faixas/:id/', validaToken, validaPermissao(['manipulacao', 'admin']), FaixaController.deletar);

module.exports = faixaRouter;
