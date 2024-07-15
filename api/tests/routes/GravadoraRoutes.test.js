const { default: axios } = require('axios');
const proxy = require('./index.test');

let id = null;

/* eslint-disable no-undef */
describe('Testando rotas de gravadoras', () => {
  test('[POST] Adicionando uma gravadora', async () => {
    const request = await axios.post('/api/gravadoras/', {
      nome: 'Nova Gravadora',
      imagem: 'www.url-da-imagem.com.br',
      paisId: 1,
    }, {
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tZSI6ImJydXRhbCBmb3JnZSIsImVtYWlsIjoiYnJ1dGFsLmZvcmdlQGdtYWlsLmNvbSIsInRlbGVmb25lIjoiMTE5ODA2NzU5OTMiLCJwZXJtaXNzYW8iOiJhZG1pbiIsImlhdCI6MTcyMDkxMzI2MX0.qDFJ-rC5usQ9LOcOk3xT9PA0e5pN8zVxFt8QHO2Np-E',
      },
      proxy,
    });

    id = request.data.dados.id;

    expect(request.status).toBe(201);
  });

  test('[GET] Todas as gravadoras', async () => {
    const request = await axios.get('/api/gravadoras/', { proxy });

    expect(request.status).toBe(200);
    expect(Array.isArray(request.data.dados)).toBe(true);
  });

  test('[GET] Uma gravadora por id', async () => {
    const request = await axios.get(`/api/gravadoras/${id}`, { proxy });

    expect(request.status).toBe(200);
  });

  test('[PUT] Atualizando uma gravadora', async () => {
    const request = await axios.put(`/api/gravadoras/${id}`, {
      nome: 'Atualiza Gravadora',
      imagem: 'www.url-da-imagem.com.br',
      paisId: 1,
    }, {
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tZSI6ImJydXRhbCBmb3JnZSIsImVtYWlsIjoiYnJ1dGFsLmZvcmdlQGdtYWlsLmNvbSIsInRlbGVmb25lIjoiMTE5ODA2NzU5OTMiLCJwZXJtaXNzYW8iOiJhZG1pbiIsImlhdCI6MTcyMDkxMzI2MX0.qDFJ-rC5usQ9LOcOk3xT9PA0e5pN8zVxFt8QHO2Np-E',
      },
      proxy,
    });

    expect(request.status).toBe(200);
  });

  test('[DELETE] Deletando uma gravadora', async () => {
    const request = await axios.delete(`/api/gravadoras/${id}`, {
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tZSI6ImJydXRhbCBmb3JnZSIsImVtYWlsIjoiYnJ1dGFsLmZvcmdlQGdtYWlsLmNvbSIsInRlbGVmb25lIjoiMTE5ODA2NzU5OTMiLCJwZXJtaXNzYW8iOiJhZG1pbiIsImlhdCI6MTcyMDkxMzI2MX0.qDFJ-rC5usQ9LOcOk3xT9PA0e5pN8zVxFt8QHO2Np-E',
      },
      proxy,
    });

    expect(request.status).toBe(200);
  });
});
