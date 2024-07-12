const { body } = require('express-validator');
const { Router } = require('express');
const ArtistaController = require('../controllers/ArtistaController');
const validaToken = require('../middlewares/validaToken');
const validaPermissao = require('../middlewares/validaPermissao');

const artistaRouter = Router();

artistaRouter
  .post(
    '/artistas/',
    validaToken,
    validaPermissao(['manipulacao', 'admin']),
    [
      body('nome').notEmpty().withMessage('Campo "Nome" não pode ser vazio'),
      body('dataFormacao').notEmpty().withMessage('Campo "Data de Formação" não pode ser vazio'),
      body('dataFormacao').isDate().withMessage('Campo "Data de Formação" deve ser uma data válida'),
      body('ativo').notEmpty().withMessage('Campo "Ativo" não pode ser vazio'),
      body('ativo').isBoolean().withMessage('Campo "Ativo" deve ser um valor booleano'),
      body('imagem').notEmpty().withMessage('Campo "URL da Imagem" não pode ser vazio'),
      body('imagem').isURL().withMessage('Campo "URL da Imagem" deve ser uma URL válida'),
      body('generoId').notEmpty().withMessage('Campo "Gênero" não pode ser vazio'),
      body('generoId').isInt().withMessage('Campo "GêneroId" deve ser um número inteiro'),
      body('paisId').notEmpty().withMessage('Campo "Pais de Origem" não pode ser vazio'),
      body('paisId').isInt().withMessage('Campo "PaisId" deve ser um número inteiro'),
    ],
    ArtistaController.adicionar,
  )
  .get('/artistas/', ArtistaController.exibirTodos)
  .get('/artistas/:id/', ArtistaController.exibirUm)
  .put(
    '/artistas/:id/',
    validaToken,
    validaPermissao(['manipulacao', 'admin']),
    [
      body('nome').notEmpty().withMessage('Campo "Nome" não pode ser vazio'),
      body('dataFormacao').notEmpty().withMessage('Campo "Data de Formação" não pode ser vazio'),
      body('dataFormacao').isDate().withMessage('Campo "Data de Formação" deve ser uma data válida'),
      body('ativo').notEmpty().withMessage('Campo "Ativo" não pode ser vazio'),
      body('ativo').isBoolean().withMessage('Campo "Ativo" deve ser um valor booleano'),
      body('imagem').notEmpty().withMessage('Campo "URL da Imagem" não pode ser vazio'),
      body('imagem').isURL().withMessage('Campo "URL da Imagem" deve ser uma URL válida'),
      body('generoId').notEmpty().withMessage('Campo "Gênero" não pode ser vazio'),
      body('generoId').isInt().withMessage('Campo "GêneroId" deve ser um número inteiro'),
      body('paisId').notEmpty().withMessage('Campo "Pais de Origem" não pode ser vazio'),
      body('paisId').isInt().withMessage('Campo "PaisId" deve ser um número inteiro'),
    ],
    ArtistaController.atualizar,
  )
  .delete('/artistas/:id/', validaToken, validaPermissao(['manipulacao', 'admin']), ArtistaController.deletar);

module.exports = artistaRouter;
