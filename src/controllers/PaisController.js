const Pais = require("../models/Pais");

class PaisController {
  static async adicionar(req, res) {
    const { nome } = req.body;
    try {
      const pais = await Pais.create({ nome })
      res.status(201).json({
        mensagem: 'Pais adicionado com sucesso!',
        dados: pais,
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
      const paises = await Pais.findAndCountAll();
      res.status(200).json({
        qtd: paises.count,
        dados: paises.rows,
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
      const pais = await Pais.findOne({
        where: { id },
      });
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
    try {
      await Pais.update({ nome }, {
        where: { id },
      });
      res.status(200).json({
        mensagem: 'Pais alterado com sucesso',
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
