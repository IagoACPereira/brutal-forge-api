const { default: axios } = require('axios');
const proxy = require('./index.test');

let id = null;

/* eslint-disable no-undef */
describe('Testando rotas de paises', () => {
  test('[POST] Adicionando um pais', async () => {
    const request = await axios.post('/api/paises/', {
      nome: 'Novo Pais',
    }, {
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tZSI6ImJydXRhbCBmb3JnZSIsImVtYWlsIjoiYnJ1dGFsLmZvcmdlQGdtYWlsLmNvbSIsInRlbGVmb25lIjoiMTE5ODA2NzU5OTMiLCJwZXJtaXNzYW8iOiJhZG1pbiIsImlhdCI6MTcyMDkxMzI2MX0.qDFJ-rC5usQ9LOcOk3xT9PA0e5pN8zVxFt8QHO2Np-E',
      },
      proxy,
    });

    id = request.data.dados.id;

    expect(request.status).toBe(201);
  });

  test('[GET] Todos os paises', async () => {
    const request = await axios.get('/api/paises/', { proxy });

    expect(request.status).toBe(200);
    expect(Array.isArray(request.data.dados)).toBe(true);
  });

  test('[GET] Um pais por id', async () => {
    const request = await axios.get(`/api/paises/${id}`, { proxy });

    expect(request.status).toBe(200);
  });

  test('[PUT] Atualizando um pais', async () => {
    const request = await axios.put(`/api/paises/${id}`, {
      nome: 'Atualiza Pais',
    }, {
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tZSI6ImJydXRhbCBmb3JnZSIsImVtYWlsIjoiYnJ1dGFsLmZvcmdlQGdtYWlsLmNvbSIsInRlbGVmb25lIjoiMTE5ODA2NzU5OTMiLCJwZXJtaXNzYW8iOiJhZG1pbiIsImlhdCI6MTcyMDkxMzI2MX0.qDFJ-rC5usQ9LOcOk3xT9PA0e5pN8zVxFt8QHO2Np-E',
      },
      proxy,
    });

    expect(request.status).toBe(200);
  });

  test('[DELETE] Deletando um pais', async () => {
    const request = await axios.delete(`/api/paises/${id}`, {
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tZSI6ImJydXRhbCBmb3JnZSIsImVtYWlsIjoiYnJ1dGFsLmZvcmdlQGdtYWlsLmNvbSIsInRlbGVmb25lIjoiMTE5ODA2NzU5OTMiLCJwZXJtaXNzYW8iOiJhZG1pbiIsImlhdCI6MTcyMDkxMzI2MX0.qDFJ-rC5usQ9LOcOk3xT9PA0e5pN8zVxFt8QHO2Np-E',
      },
      proxy,
    });

    expect(request.status).toBe(200);
  });
});
