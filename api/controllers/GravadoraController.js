const Album = require("../models/Album");
const Artista = require("../models/Artista");
const Gravadora = require("../models/Gravadora");
const Pais = require("../models/Pais");
const paginar = require("../modules/paginar");

class GravadoraController {
  static async adicionar(req, res) {
    const {
      nome,
      imagem,
      paisId,
    } = req.body;
    try {
      const gravadora = await Gravadora.create({
        nome,
        imagem,
        paisId,
      });

      res.status(201).json({
        mensagem: 'Gravadora adicionada com sucesso',
        dados: gravadora,
        status: 201,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: error.message,
        status: 400,
      });
    }
  }

  static async exibirTodos(req, res) {
    const pagina = Number(req.query.pagina) || 1;
    const limite = Number(req.query.limite) || 10;
    try {
      const gravadoras = await Gravadora.findAll({
        attributes: ['id', 'nome', 'imagem'],
        include: {
          model: Pais,
          as: 'paisGravadora',
        },
      });

      const paginacao = paginar(gravadoras, pagina, limite);

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
      const gravadora = await Gravadora.findOne({
        where: { id },
        attributes: ['id', 'nome', 'imagem'],
        include: [
          {
            model: Pais,
            as: 'paisGravadora',
          },
          {
            model: Album,
            attributes: ['id', 'titulo', 'dataLancamento', 'imagem', 'curtidas', 'descurtidas'],
            include: {
              model: Artista,
              as: 'artista',
              attributes: ['id', 'nome']
            },
          },
        ],
        order: [
          [Album, 'id', 'ASC'],
        ],
      });
      res.status(200).json({
        dados: gravadora,
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
      imagem,
      paisId,
    } = req.body;
    try {
      await Gravadora.update({
        nome,
        imagem,
        paisId,
      }, {
        where: { id },
      });

      res.status(200).json({
        mensagem: 'Gravadora atualizada com sucesso',
        status: 200,
      });
    } catch (error) {
      res.status(400).json({
        mensagem: error.message,
        status: 400,
      });
    }
  }

  static async deletar(req, res) {
    const { id } = req.params;
    try {
      await Gravadora.destroy({
        where: { id },
      });
      
      res.status(200).json({
        mensagem: 'Gravadora deletada com sucesso',
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

module.exports = GravadoraController;
