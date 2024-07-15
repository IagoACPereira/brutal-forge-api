const { validationResult } = require('express-validator');
const Artista = require('../models/Artista');
const Gravadora = require('../models/Gravadora');
const Pais = require('../models/Pais');
const paginar = require('../modules/paginar');

class PaisController {
  static async adicionar(req, res) {
    const { nome } = req.body;
    const validaDados = validationResult(req);
    try {
      if (!validaDados.isEmpty()) {
        throw new Error('Erro validação dos dados');
      }

      const pais = await Pais.findOne({
        where: { nome },
      });

      if (pais) {
        throw new Error('Este pais já esta cadastrada');
      }

      const novoPais = await Pais.create({ nome });
      res.status(201).json({
        mensagem: 'Pais adicionado com sucesso!',
        dados: novoPais,
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
      const paises = await Pais.findAll({
        order: [
          ['id', 'ASC'],
        ],
      });

      const paginacao = paginar(paises, pagina, limite);

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
      const pais = await Pais.findOne({
        where: { id },
        include: [
          {
            model: Artista,
            attributes: ['id', 'nome', 'dataFormacao', 'ativo', 'descricao', 'imagem'],
          },
          {
            model: Gravadora,
            as: 'paisGravadora',
            attributes: ['id', 'nome', 'imagem'],
          },
        ],
        order: [
          [Artista, 'id', 'ASC'],
        ],
      });

      if (!pais) {
        throw new Error(`Não existe pais cadastrado com o id ${id}`);
      }

      res.status(200).json({
        dados: pais,
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
    const { nome } = req.body;
    const validaDados = validationResult(req);
    try {
      if (!validaDados.isEmpty()) {
        throw new Error('Erro validação dos dados');
      }
      await Pais.update({ nome }, {
        where: { id },
      });
      res.status(200).json({
        mensagem: 'Pais alterado com sucesso',
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
      await Pais.destroy({
        where: { id },
      });
      res.status(200).json({
        mensagem: 'Pais deletado com sucesso',
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

module.exports = PaisController;
