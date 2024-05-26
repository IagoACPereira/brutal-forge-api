const Genero = require("../models/Genero");

class GeneroController {
  static async adicionar(req, res) {
    const { nome } = req.body;
    try {
      const genero = await Genero.create({ nome });

      res.status(201).json({
        mensagem: 'em testes',
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

      res.status(200).json({
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
