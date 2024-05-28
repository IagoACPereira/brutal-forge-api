const Artista = require("../models/Artista");
const Genero = require("../models/Genero");
const Pais = require("../models/Pais");

class ArtistaController {
  static async adicionar(req, res) {
    const {
      nome,
      dataFormacao,
      ativo,
      descricao,
      imagem,
      generoId,
      paisId,
    } = req.body;
    try {
      const artista = await Artista.create({
        nome,
        dataFormacao,
        ativo,
        descricao,
        imagem,
        generoId,
        paisId,
      });

      res.status(201).json({
        mensagem: 'Artista adicionado com sucesso',
        dados: artista,
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
      const artistas = await Artista.findAndCountAll({
        attributes: ['id', 'nome', 'dataFormacao', 'ativo', 'descricao', 'imagem'],
        include: [
          {
            model: Genero,
          },
          {
            model: Pais,
            as: 'paisArtista',
          }
        ],
      });

      res.status(200).json({
        qtd: artistas.count,
        dados: artistas.rows,
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
      const artista = await Artista.findOne({
        where: { id },
        attributes: ['id', 'nome', 'dataFormacao', 'ativo', 'descricao', 'imagem'],
        include: [
          {
            model: Genero,
          },
          {
            model: Pais,
            as: 'paisArtista',
          }
        ],
      });

      res.status(200).json({
        dados: artista,
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
      dataFormacao,
      ativo,
      descricao,
      imagem,
      generoId,
      paisId,
    } = req.body;
    try {
      await Artista.update({
        nome,
        dataFormacao,
        ativo,
        descricao,
        imagem,
        generoId,
        paisId,
      }, {
        where: { id },
      });

      res.status(200).json({
        mensagem: 'Artista atualizado com sucesso',
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
      await Artista.destroy({
        where: { id },
      });

      res.status(200).json({
        mensagem: 'Artista deletado com sucesso',
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

module.exports = ArtistaController;
