const Album = require("../models/Album");

class AlbumController {
  static async adicionar(req, res) {
    const {
      titulo,
      dataLancamento,
      imagem,
      artistaId,
      gravadoraId,
    } = req.body;
    try {
      const album = await Album.create({
        titulo,
        dataLancamento,
        imagem,
        artistaId,
        gravadoraId,
      });

      res.status(201).json({
        mensagem: 'Album adicionado com sucesso',
        dados: album,
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
      const albuns = await Album.findAndCountAll();

      res.status(200).json({
        qtd: albuns.count,
        dados: albuns.rows,
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
      const album = await Album.findOne({
        where: { id },
      });

      res.status(200).json({
        dados: album,
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
      dataLancamento,
      imagem,
      artistaId,
      gravadoraId,
    } = req.body;
    try {
      await Album.update({
        titulo,
        dataLancamento,
        imagem,
        artistaId,
        gravadoraId,
      }, {
        where: { id },
      });

      res.status(200).json({
        mensagem: 'Album atualizado com sucesso',
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
      await Album.destroy({
        where: { id },
      });

      res.status(200).json({
        mensagem: 'Album deletado com sucesso',
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

module.exports = AlbumController;