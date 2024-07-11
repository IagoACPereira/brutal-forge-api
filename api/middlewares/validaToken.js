const jwt = require('jsonwebtoken');

async function validaToken(req, res, next) {
  const token = req.headers.authorization;
  try {
    jwt.verify(token, process.env.SEGREDO);

    next();
  } catch (error) {
    res.status(401).json({
      mensagem: error.message,
      status: 401,
    });
  }
}

module.exports = validaToken;
