const Usuario = require("../models/Usuario");
const jwt = require('jsonwebtoken');

function validaPermissao(permissoes) {
  return async function (req, res, next) {
    const token = req.headers.authorization;
    try {
      const payload = jwt.decode(token);

      console.log(payload);

      console.log(permissoes);

      if (!permissoes.includes(payload.permissao)) {
        throw new Error('Não autorizado');
      }

      next();
    } catch (error) {
      res.status(401).json({
        mensagem: error.message,
        status: 401,
      });
    } 
  }
}

module.exports = validaPermissao;
