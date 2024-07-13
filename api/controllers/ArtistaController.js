const { validationResult } = require('express-validator');
const Album = require('../models/Album');
const Artista = require('../models/Artista');
const Genero = require('../models/Genero');
const Gravadora = require('../models/Gravadora');
const Pais = require('../models/Pais');
const paginar = require('../modules/paginar');

class ArtistaController {
  static async adicionar(req, res) {
    const {
      nome,
      dataFormacao,
      ativo,
      descricao,
      imagem,
      generoId,
      paisId,
    } = req.body;
    const validaDados = validationResult(req);
    try {
      if (!validaDados.isEmpty()) {
        throw new Error('Erro validação dos dados');
      }

      const artistaExiste = await Artista.findOne({
        where: {
          nome,
          dataFormacao,
          generoId,
          paisId,
        },
      });

      if (artistaExiste) {
        throw new Error('Este artista já está cadastrado');
      }

      const novoArtista = await Artista.create({
        nome,
        dataFormacao,
        ativo,
        descricao,
        imagem,
        generoId,
        paisId,
      });

      res.status(201).json({
        mensagem: 'Artista adicionado com sucesso',
        dados: novoArtista,
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
      const artistas = await Artista.findAll({
        attributes: ['id', 'nome', 'dataFormacao', 'ativo', 'imagem'],
        include: [
          {
            model: Genero,
          },
          {
            model: Pais,
            as: 'paisArtista',
          },
        ],
        order: [
          ['id', 'ASC'],
        ],
      });

      const paginacao = paginar(artistas, pagina, limite);

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
      const artista = await Artista.findOne({
        where: { id },
        attributes: ['id', 'nome', 'dataFormacao', 'ativo', 'descricao', 'imagem'],
        include: [
          {
            model: Album,
            attributes: ['id', 'titulo', 'dataLancamento', 'imagem', 'curtidas', 'descurtidas'],
            as: 'albuns',
            include: {
              model: Gravadora,
              attributes: ['id', 'nome', 'imagem'],
            },
          },
          {
            model: Genero,
          },
          {
            model: Pais,
            as: 'paisArtista',
          },
        ],
        // order: [
        //   [Album, 'dataLancamento', 'ASC'],
        // ],
      });

      if (!artista) {
        throw new Error(`Não existe artista cadastrado com o id ${id}`);
      }

      res.status(200).json({
        dados: artista,
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
      nome,
      dataFormacao,
      ativo,
      descricao,
      imagem,
      generoId,
      paisId,
    } = req.body;
    const validaDados = validationResult(req);
    try {
      if (!validaDados.isEmpty()) {
        throw new Error('Erro validação dos dados');
      }
      await Artista.update({
        nome,
        dataFormacao,
        ativo,
        descricao,
        imagem,
        generoId,
        paisId,
      }, {
        where: { id },
      });

      res.status(200).json({
        mensagem: 'Artista atualizado com sucesso',
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
      await Artista.destroy({
        where: { id },
      });

      res.status(200).json({
        mensagem: 'Artista deletado com sucesso',
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

module.exports = ArtistaController;
