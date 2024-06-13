const Gravadora = require("../models/Gravadora");
const Pais = require("../models/Pais");

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
    try {
      const gravadoras = await Gravadora.findAndCountAll({
        attributes: ['id', 'nome', 'imagem'],
        include: {
          model: Pais,
          as: 'paisGravadora',
        },
      });

      res.status(200).render('gravadoras/index.ejs', {
        qtd: gravadoras.count,
        dados: gravadoras.rows,
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
      const gravadora = await Gravadora.findOne({
        where: { id },
        attributes: ['id', 'nome', 'imagem'],
        include: {
          model: Pais,
          as: 'paisGravadora',
        },
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
