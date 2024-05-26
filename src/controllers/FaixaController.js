const Faixa = require("../models/Faixa");

class FaixaController {
  static async adicionar(req, res) {
    const {
      titulo,
      duracao,
      numFaixa,
      albumId,
    } = req.body;
    try {
      const faixa = await Faixa.create({
        titulo,
        duracao,
        numFaixa,
        albumId,
      });

      res.status(201).json({
        mensagem: 'Faixa adicionada com sucesso',
        dados: faixa,
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
      const faixas = Faixa.findAndCountAll();

      res.status(200).json({
        qtd: faixas.count,
        dados: faixas.rows,
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
      const faixa = await Faixa.findOne({
        where: { id },
      });

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
      albumId,
    } = req.body;
    try {
      await Faixa.update({
        titulo,
        duracao,
        numFaixa,
        albumId,
      }, {
        where: { id },
      });

      res.status(200).json({
        mensagem: 'Faixa atualizada com sucesso',
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
