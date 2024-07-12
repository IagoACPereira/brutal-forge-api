const { body } = require('express-validator');
const { Router } = require('express');
const AlbumController = require('../controllers/AlbumController');
const validaToken = require('../middlewares/validaToken');
const validaPermissao = require('../middlewares/validaPermissao');

const albumRouter = Router();

albumRouter
  .post(
    '/albuns/',
    validaToken,
    validaPermissao(['manipulacao', 'admin']),
    [
      body('titulo').notEmpty().withMessage('Campo "Título" não pode ser vazio'),
      body('dataLancamento').notEmpty().withMessage('Campo "Data de Lançamento" não pode ser vazio'),
      body('dataLancamento').isDate().withMessage('Campo "Data de Lançamento" deve ser uma data válida'),
      body('imagem').notEmpty().withMessage('Campo "URL da Imagem" não pode ser vazio'),
      body('imagem').isURL().withMessage('Campo "URL da Imagem" deve ser uma URL válida'),
      body('artistaId').notEmpty().withMessage('Campo "Artista" não pode ser vazio'),
      body('artistaId').isInt().withMessage('Campo "ArtistaId" deve ser um número inteiro'),
      body('gravadoraId').notEmpty().withMessage('Campo "Gravadora" não pode ser vazio'),
      body('gravadoraId').isInt().withMessage('Campo "Gravadora" deve ser um número inteiro'),
    ],
    AlbumController.adicionar,
  )
  .get('/albuns/:id/curtir', AlbumController.gostar)
  .get('/albuns/:id/descurtir', AlbumController.desgostar)
  .get('/albuns/:id/', AlbumController.exibirUm)
  .get('/albuns/', AlbumController.exibirTodos)
  .put(
    '/albuns/:id/',
    validaToken,
    validaPermissao(['manipulacao', 'admin']),
    [
      body('titulo').notEmpty().withMessage('Campo "Título" não pode ser vazio'),
      body('dataLancamento').notEmpty().withMessage('Campo "Data de Lançamento" não pode ser vazio'),
      body('dataLancamento').isDate().withMessage('Campo "Data de Lançamento" deve ser uma data válida'),
      body('imagem').notEmpty().withMessage('Campo "URL da Imagem" não pode ser vazio'),
      body('imagem').isURL().withMessage('Campo "URL da Imagem" deve ser uma URL válida'),
      body('artistaId').notEmpty().withMessage('Campo "Artista" não pode ser vazio'),
      body('artistaId').isInt().withMessage('Campo "ArtistaId" deve ser um número inteiro'),
      body('gravadoraId').notEmpty().withMessage('Campo "Gravadora" não pode ser vazio'),
      body('gravadoraId').isInt().withMessage('Campo "Gravadora" deve ser um número inteiro'),
    ],
    AlbumController.atualizar,
  )
  .delete('/albuns/:id/', validaToken, validaPermissao(['manipulacao', 'admin']), AlbumController.deletar);

module.exports = albumRouter;
