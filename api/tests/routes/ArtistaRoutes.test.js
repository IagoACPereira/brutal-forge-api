const { default: axios } = require('axios');
const proxy = require('./index.test');

let id = null;

/* eslint-disable no-undef */
describe('Testando rotas de artistas', () => {
  test('[POST] Adicionando um artista', async () => {
    const request = await axios.post('/api/artistas/', {
      nome: 'Novo artista',
      dataFormacao: '2000-01-01',
      ativo: true,
      descricao: '',
      imagem: 'www.url-da-imagem.com.br',
      generoId: 1,
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

  test('[GET] Todos os artistas', async () => {
    const request = await axios.get('/api/artistas/', { proxy });

    expect(request.status).toBe(200);
    expect(Array.isArray(request.data.dados)).toBe(true);
  });

  test('[GET] Um artista por id', async () => {
    const request = await axios.get(`/api/artistas/${id}`, { proxy });

    expect(request.status).toBe(200);
  });

  test('[PUT] Atualizando um artista', async () => {
    const request = await axios.put(`/api/artistas/${id}`, {
      nome: 'Atualiza Pais',
      dataFormacao: '2000-01-01',
      ativo: true,
      descricao: '',
      imagem: 'www.url-da-imagem.com.br',
      generoId: 1,
      paisId: 1,
    }, {
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tZSI6ImJydXRhbCBmb3JnZSIsImVtYWlsIjoiYnJ1dGFsLmZvcmdlQGdtYWlsLmNvbSIsInRlbGVmb25lIjoiMTE5ODA2NzU5OTMiLCJwZXJtaXNzYW8iOiJhZG1pbiIsImlhdCI6MTcyMDkxMzI2MX0.qDFJ-rC5usQ9LOcOk3xT9PA0e5pN8zVxFt8QHO2Np-E',
      },
      proxy,
    });

    expect(request.status).toBe(200);
  });

  test('[DELETE] Deletando um artista', async () => {
    const request = await axios.delete(`/api/artistas/${id}`, {
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tZSI6ImJydXRhbCBmb3JnZSIsImVtYWlsIjoiYnJ1dGFsLmZvcmdlQGdtYWlsLmNvbSIsInRlbGVmb25lIjoiMTE5ODA2NzU5OTMiLCJwZXJtaXNzYW8iOiJhZG1pbiIsImlhdCI6MTcyMDkxMzI2MX0.qDFJ-rC5usQ9LOcOk3xT9PA0e5pN8zVxFt8QHO2Np-E',
      },
      proxy,
    });

    expect(request.status).toBe(200);
  });
});
