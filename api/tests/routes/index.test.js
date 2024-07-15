const axios = require('axios');

const proxy = {
  port: 3000,
};

/* eslint-disable no-undef */
describe('Testando rota inicial', () => {
  test('[GET] inicial', async () => {
    const response = await axios.get('/api/', { proxy });

    expect(response.status).toBe(200);
  });
});

module.exports = proxy;
