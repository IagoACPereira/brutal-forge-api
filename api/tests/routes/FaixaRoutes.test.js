const { default: axios } = require('axios');
const proxy = require('./index.test');

let id = null;

/* eslint-disable no-undef */
describe('Testando rotas de faixas', () => {
  test('[POST] Adicionando uma faixa', async () => {
    const request = await axios.post('/api/faixas/', {
      titulo: 'Nova Faixa',
      duracao: 'duracao',
      numFaixa: 1,
      albumId: 1,
      letra: '',
    }, {
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tZSI6ImJydXRhbCBmb3JnZSIsImVtYWlsIjoiYnJ1dGFsLmZvcmdlQGdtYWlsLmNvbSIsInRlbGVmb25lIjoiMTE5ODA2NzU5OTMiLCJwZXJtaXNzYW8iOiJhZG1pbiIsImlhdCI6MTcyMDkxMzI2MX0.qDFJ-rC5usQ9LOcOk3xT9PA0e5pN8zVxFt8QHO2Np-E',
      },
      proxy,
    });

    id = request.data.dados.id;

    expect(request.status).toBe(201);
  });

  test('[GET] Todos as faixas', async () => {
    const request = await axios.get('/api/faixas/', { proxy });

    expect(request.status).toBe(200);
    expect(Array.isArray(request.data.dados)).toBe(true);
  });

  test('[GET] Uma faixa por id', async () => {
    const request = await axios.get(`/api/faixas/${id}`, { proxy });

    expect(request.status).toBe(200);
  });

  test('[PUT] Atualizando uma faixa', async () => {
    const request = await axios.put(`/api/faixas/${id}`, {
      titulo: 'Atualiza Faixa',
      duracao: 'duracao',
      numFaixa: 1,
      albumId: 1,
      letra: '',
    }, {
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tZSI6ImJydXRhbCBmb3JnZSIsImVtYWlsIjoiYnJ1dGFsLmZvcmdlQGdtYWlsLmNvbSIsInRlbGVmb25lIjoiMTE5ODA2NzU5OTMiLCJwZXJtaXNzYW8iOiJhZG1pbiIsImlhdCI6MTcyMDkxMzI2MX0.qDFJ-rC5usQ9LOcOk3xT9PA0e5pN8zVxFt8QHO2Np-E',
      },
      proxy,
    });

    expect(request.status).toBe(200);
  });

  test('[DELETE] Deletando uma faixa', async () => {
    const request = await axios.delete(`/api/faixas/${id}`, {
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tZSI6ImJydXRhbCBmb3JnZSIsImVtYWlsIjoiYnJ1dGFsLmZvcmdlQGdtYWlsLmNvbSIsInRlbGVmb25lIjoiMTE5ODA2NzU5OTMiLCJwZXJtaXNzYW8iOiJhZG1pbiIsImlhdCI6MTcyMDkxMzI2MX0.qDFJ-rC5usQ9LOcOk3xT9PA0e5pN8zVxFt8QHO2Np-E',
      },
      proxy,
    });

    expect(request.status).toBe(200);
  });
});
