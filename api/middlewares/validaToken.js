const jwt = require('jsonwebtoken');

async function validaToken(req, res, next) {
  const token = req.headers.authorization;
  try {
    await jwt.verify(token, process.env.SEGREDO)

    next();  
  } catch (error) {
    res.status(400).json({
      mensagem: error.message,
      status: 400,
    });
  }
}

module.exports = validaToken;
