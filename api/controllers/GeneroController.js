const Album = require("../models/Album");
const Artista = require("../models/Artista");
const Genero = require("../models/Genero");
const Pais = require("../models/Pais");
const paginar = require("../modules/paginar");

class GeneroController {
  static async adicionar(req, res) {
    const { nome } = req.body;
    try {
      const genero = await Genero.create({ nome });

      res.status(201).json({
        mensagem: 'Genero adicionado com sucesso',
        dados: genero,
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
      const generos = await Genero.findAll({
        order: [
          ['id', 'ASC'],
        ],
      });

      const paginacao = paginar(generos, pagina, limite);

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
      const genero = await Genero.findOne({
        where: { id },
        include: [
          {
            model: Artista,
            attributes: ['id', 'nome', 'dataFormacao', 'ativo', 'descricao', 'imagem'],
            include: [
              {
                model: Genero,
              },
              {
                model: Pais,
                as: 'paisArtista'
              }
            ],
          },
        ],
        order: [
          [Artista, 'id', 'ASC'],
        ],
      });

      res.status(200).json({
        dados: genero,
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
    try {
      await Genero.update({ nome }, {
        where: { id },
      });

      res.status(200).json({
        mensagem: 'Genero atualizado com sucesso',
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
      await Genero.destroy({
        where: { id },
      });

      res.status(200).json({
        mensagem: 'Genero deletado com sucesso',
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

module.exports = GeneroController;
