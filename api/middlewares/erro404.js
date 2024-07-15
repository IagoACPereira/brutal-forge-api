function erro404(_, res, next) {
  res.status(404).json({
    mensagem: 'Rota inexistente',
    status: 404,
  });

  next();
}

module.exports = erro404;
