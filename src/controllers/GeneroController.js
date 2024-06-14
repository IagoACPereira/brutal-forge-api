const Album = require("../models/Album");
const Artista = require("../models/Artista");
const Genero = require("../models/Genero");
const Pais = require("../models/Pais");

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
    try {
      const generos = await Genero.findAndCountAll();

      res.status(200).render('generos/index.ejs', {
        qtd: generos.count,
        dados: generos.rows,
        status: 200,
      });
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
        ]
      });

      res.status(200).render('generos/genero.ejs', {
        dados: genero,
        status: 200,
      });
      // res.status(200).json({
      //   dados: genero,
      //   status: 200,
      // });
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
