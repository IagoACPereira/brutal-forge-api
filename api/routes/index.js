function routes(app) {
  app
    .get('/api/', (_, res) => {
      res.status(200).json('API Forja Bruta');
    });
}

export default routes;
