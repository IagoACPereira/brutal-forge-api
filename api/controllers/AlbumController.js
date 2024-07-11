const { validationResult } = require('express-validator');
const Album = require('../models/Album');
const Artista = require('../models/Artista');
const Faixa = require('../models/Faixa');
const Gravadora = require('../models/Gravadora');
const paginar = require('../modules/paginar');

class AlbumController {
  static async adicionar(req, res) {
    const {
      titulo,
      dataLancamento,
      imagem,
      artistaId,
      gravadoraId,
    } = req.body;
    const validaDados = validationResult(req);
    try {
      if (!validaDados.isEmpty()) {
        throw new Error('Erro validação dos dados');
      }
      const album = await Album.create({
        titulo,
        dataLancamento,
        imagem,
        artistaId,
        gravadoraId,
      });

      res.status(201).json({
        mensagem: 'Album adicionado com sucesso',
        dados: album,
        status: 201,
      });
    } catch (error) {
      if (error.message === 'Erro validação dos dados') {
        return res.status(400).json({
          mensagem: validaDados.array()[0].msg,
          status: 400,
        });
      }
      res.status(400).json({
        mensagem: error.message,
        status: 400,
      });
    }
    return 0;
  }

  static async exibirTodos(req, res) {
    const pagina = Number(req.query.pagina) || 1;
    const limite = Number(req.query.limite) || 10;
    try {
      const albuns = await Album.findAll({
        attributes: ['id', 'titulo', 'dataLancamento', 'imagem', 'curtidas', 'descurtidas'],
        include: [
          {
            model: Artista,
            as: 'artista',
            attributes: ['id', 'nome', 'dataFormacao', 'ativo', 'imagem'],
          },
          {
            model: Gravadora,
            attributes: ['id', 'nome', 'imagem'],
          },
        ],
        order: [
          ['id', 'ASC'],
        ],
      });

      const paginacao = paginar(albuns, pagina, limite);

      res.status(200).json(paginacao);
    } catch (error) {
      res.status(400).json({
        mensagem: error.message,
        status: 400,
      });
    }
  }

  static async exibirUm(req, res) {
    const { id } = req.params;
    try {
      const album = await Album.findOne({
        where: { id },
        attributes: ['id', 'titulo', 'dataLancamento', 'imagem', 'curtidas', 'descurtidas'],
        include: [
          {
            model: Artista,
            as: 'artista',
            attributes: ['id', 'nome', 'dataFormacao', 'ativo', 'imagem'],
          },
          {
            model: Gravadora,
            attributes: ['id', 'nome', 'imagem'],
          },
          {
            model: Faixa,
            attributes: ['id', 'titulo', 'duracao', 'numFaixa', 'letra'],
          },
        ],
        order: [
          [Faixa, 'numFaixa', 'ASC'],
        ],
      });

      res.status(200).json({
        dados: album,
        status: 200,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: error.message,
        status: 400,
      });
    }
  }

  static async atualizar(req, res) {
    const { id } = req.params;
    const {
      titulo,
      dataLancamento,
      imagem,
      artistaId,
      gravadoraId,
    } = req.body;
    const validaDados = validationResult(req);
    try {
      if (!validaDados.isEmpty()) {
        throw new Error('Erro validação dos dados');
      }
      await Album.update({
        titulo,
        dataLancamento,
        imagem,
        artistaId,
        gravadoraId,
      }, {
        where: { id },
      });

      res.status(200).json({
        mensagem: 'Album atualizado com sucesso',
        status: 200,
      });
    } catch (error) {
      if (error.message === 'Erro validação dos dados') {
        return res.status(400).json({
          mensagem: validaDados.array()[0].msg,
          status: 400,
        });
      }
      res.status(400).json({
        mensagem: error.message,
        status: 400,
      });
    }
    return 0;
  }

  static async deletar(req, res) {
    const { id } = req.params;
    try {
      await Album.destroy({
        where: { id },
      });

      res.status(200).json({
        mensagem: 'Album deletado com sucesso',
        status: 200,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: error.message,
        status: 400,
      });
    }
  }

  static async gostar(req, res) {
    const { id } = req.params;
    try {
      const album = await Album.findOne({
        where: { id },
      });

      await Album.update({
        curtidas: album.curtidas + 1,
      }, {
        where: { id },
      });

      res.status(200).json({
        mensagem: `Você gostou do album ${album.titulo}`,
        status: 200,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: error.message,
        status: 400,
      });
    }
  }

  static async desgostar(req, res) {
    const { id } = req.params;
    try {
      const album = await Album.findOne({
        where: { id },
      });

      await Album.update({
        descurtidas: album.descurtidas + 1,
      }, {
        where: { id },
      });

      res.status(200).json({
        mensagem: `Você não gostou do album ${album.titulo}`,
        status: 200,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: error.message,
        status: 400,
      });
    }
  }
}

module.exports = AlbumController;
