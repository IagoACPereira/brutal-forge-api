const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');
const Permissao = require('../models/Permissao');

class AuthController {
  static async autenticar(req, res) {
    const { email, senha } = req.body;
    const validaDados = validationResult(req);
    try {
      if (!validaDados.isEmpty()) {
        throw new Error('Erro validação dos dados');
      }
      const usuario = await Usuario.findOne({
        where: { email },
        include: [
          {
            model: Permissao,
          },
        ],
      });

      if (!usuario) {
        throw new Error('Usuário não cadastrado');
      }

      const comparaSenha = await bcrypt.compare(senha, usuario.senha);

      if (!comparaSenha) {
        throw new Error('Senha inválida');
      }

      const payload = {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        telefone: usuario.telefone,
        permissao: usuario.permissao.titulo,
      };

      const token = jwt.sign(payload, process.env.SEGREDO, {
        expiresIn: 60 * 60, // 1 HORA
      });

      res.status(200).json({
        mensagem: 'Usuário autenticado com sucesso',
        token,
        status: 200,
      });
    } catch (error) {
      if (error.message === 'Erro validação dos dados') {
        return res.status(400).json({
          mensagem: validaDados.array()[0].msg,
          status: 400,
        });
      }
      res.status(401).json({
        mensagem: error.message,
        status: 401,
      });
    }
    return 0;
  }
}

module.exports = AuthController;
