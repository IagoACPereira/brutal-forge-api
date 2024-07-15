const { default: axios } = require('axios');
const proxy = require('./index.test');

let id = null;

/* eslint-disable no-undef */
describe('Testando rotas de gêneros', () => {
  test('[POST] Adicionando um gênero', async () => {
    const request = await axios.post('/api/generos/', {
      nome: 'Novo Genero',
    }, {
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tZSI6ImJydXRhbCBmb3JnZSIsImVtYWlsIjoiYnJ1dGFsLmZvcmdlQGdtYWlsLmNvbSIsInRlbGVmb25lIjoiMTE5ODA2NzU5OTMiLCJwZXJtaXNzYW8iOiJhZG1pbiIsImlhdCI6MTcyMDkxMzI2MX0.qDFJ-rC5usQ9LOcOk3xT9PA0e5pN8zVxFt8QHO2Np-E',
      },
      proxy,
    });

    id = request.data.dados.id;

    expect(request.status).toBe(201);
  });

  test('[GET] Todos os generos', async () => {
    const request = await axios.get('/api/generos/', { proxy });

    expect(request.status).toBe(200);
    expect(Array.isArray(request.data.dados)).toBe(true);
  });

  test('[GET] Um genero por id', async () => {
    const request = await axios.get(`/api/generos/${id}`, { proxy });

    expect(request.status).toBe(200);
  });

  test('[PUT] Atualizando um generos', async () => {
    const request = await axios.put(`/api/generos/${id}`, {
      nome: 'Atualiza Generos',
    }, {
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tZSI6ImJydXRhbCBmb3JnZSIsImVtYWlsIjoiYnJ1dGFsLmZvcmdlQGdtYWlsLmNvbSIsInRlbGVmb25lIjoiMTE5ODA2NzU5OTMiLCJwZXJtaXNzYW8iOiJhZG1pbiIsImlhdCI6MTcyMDkxMzI2MX0.qDFJ-rC5usQ9LOcOk3xT9PA0e5pN8zVxFt8QHO2Np-E',
      },
      proxy,
    });

    expect(request.status).toBe(200);
  });

  test('[DELETE] Deletando um genero', async () => {
    const request = await axios.delete(`/api/generos/${id}`, {
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tZSI6ImJydXRhbCBmb3JnZSIsImVtYWlsIjoiYnJ1dGFsLmZvcmdlQGdtYWlsLmNvbSIsInRlbGVmb25lIjoiMTE5ODA2NzU5OTMiLCJwZXJtaXNzYW8iOiJhZG1pbiIsImlhdCI6MTcyMDkxMzI2MX0.qDFJ-rC5usQ9LOcOk3xT9PA0e5pN8zVxFt8QHO2Np-E',
      },
      proxy,
    });

    expect(request.status).toBe(200);
  });
});
