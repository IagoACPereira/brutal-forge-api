const { validationResult } = require('express-validator');
const Album = require('../models/Album');
const Faixa = require('../models/Faixa');
const paginar = require('../modules/paginar');

class FaixaController {
  static async adicionar(req, res) {
    const {
      titulo,
      duracao,
      numFaixa,
      letra,
      albumId,
    } = req.body;
    const validaDados = validationResult(req);
    try {
      if (!validaDados.isEmpty()) {
        throw new Error('Erro validação dos dados');
      }

      const faixaExiste = await Faixa.findOne({
        where: {
          titulo,
          duracao,
          numFaixa,
          albumId,
        },
      });

      if (faixaExiste) {
        throw new Error('Esta faixa já está cadastrada');
      }

      const novaFaixa = await Faixa.create({
        titulo,
        duracao,
        numFaixa,
        letra,
        albumId,
      });

      res.status(201).json({
        mensagem: 'Faixa adicionada com sucesso',
        dados: novaFaixa,
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
      const faixas = await Faixa.findAll({
        attributes: ['id', 'titulo', 'duracao', 'numFaixa'],
        include: {
          model: Album,
          attributes: ['id', 'titulo'],
        },
        order: [
          ['id', 'ASC'],
        ],
      });

      const paginacao = paginar(faixas, pagina, limite);

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
      const faixa = await Faixa.findOne({
        where: { id },
        attributes: ['id', 'titulo', 'duracao', 'numFaixa', 'letra'],
        include: {
          model: Album,
          attributes: ['id', 'titulo'],
        },
      });

      if (!faixa) {
        throw new Error(`Não existe faixa cadastrada com o id ${id}`);
      }

      res.status(200).json({
        dados: faixa,
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
      duracao,
      numFaixa,
      letra,
      albumId,
    } = req.body;
    const validaDados = validationResult(req);
    try {
      if (!validaDados.isEmpty()) {
        throw new Error('Erro validação dos dados');
      }
      await Faixa.update({
        titulo,
        duracao,
        numFaixa,
        letra,
        albumId,
      }, {
        where: { id },
      });

      res.status(200).json({
        mensagem: 'Faixa atualizada com sucesso',
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
      await Faixa.destroy({
        where: { id },
      });

      res.status(200).json({
        mensagem: 'Faixa deletada com sucesso',
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

module.exports = FaixaController;
