const Usuario = require("../models/Usuario");
const bcrypt = require('bcryptjs');
const paginar = require("../modules/paginar");
const Permissao = require("../models/Permissao");

class UsuarioController {
  static async adicionar(req, res) {
    const { nome, email, telefone, senha, confirmacaoSenha } = req.body;
    try {
      const usuario = await Usuario.findOne({
        where: { email },
      });

      if (usuario) {
        throw new Error('Usuário já está cadastrado')
      }

      if (senha !== confirmacaoSenha) {
        throw new Error('"Senha" e "Confirmação de Senha" não conferem')
      }

      const novoUsuario = await Usuario.create({
        nome,
        email,
        telefone,
        senha: await bcrypt.hash(senha, 10),
      })

      res.status(200).json({
        mensagem: 'Usuário cadastrado com sucesso',
        novoUsuario,
        status: 200,
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
      const usuarios = await Usuario.findAll({
        attributes: ['id', 'nome', 'email', 'telefone'],
        order: [
          ['id', 'ASC'],
        ],
        include: [
          {
            model: Permissao,
          },
        ],
      });

      const paginacao = paginar(usuarios, pagina, limite);

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
      const usuario = await Usuario.findOne({
        attributes: ['id', 'nome', 'email', 'telefone'],
        where: { id },
        include: [
          {
            model: Permissao,
          },
        ],
      });

      res.status(200).json(usuario);
    } catch (error) {
      res.status(400).json({
        mensagem: error.message,
        status: 400,
      });
    }
    
  }

  static async atualizar(req, res) {
    const { id } = req.params;
    const { nome, email, telefone } = req.body;
    try {
      await Usuario.update({
        nome,
        email,
        telefone,
      }, {
        where: { id },
      });

      res.status(200).json({
        mensagem: 'Usuário atualizado com sucesso',
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
      await Usuario.destroy({
        where: { id },
      });

      res.status(200).json({
        mensagem: 'Usuário deletado com sucesso',
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

module.exports = UsuarioController;