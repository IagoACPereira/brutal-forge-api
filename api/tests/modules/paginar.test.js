// eslint-disable-next-line import/no-extraneous-dependencies
const { describe, it, expect } = require('@jest/globals');
const paginar = require('../../modules/paginar');

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

describe('Testar paginação', () => {
  it('Pagina inicial deve retornar "pagina anterior" com string vazia', () => {
    expect(paginar(arr).paginaAnterior).toBe('');
  });

  it('Ultima pagina deve retornar "proxima pagina" com string vazia', () => {
    expect(paginar(arr, 2).proximaPagina).toBe('');
  });

  it('"Pagina atual" deve retornar a pagina que foi passada como parametro da função', () => {
    expect(paginar(arr, 2).paginaAtual).toBe(2);
  });

  it('"Limite de itens" deve retornar o limite que foi passado como parametro da função', () => {
    expect(paginar(arr, 4, 5).limiteItens).toBe(5);
  });

  it('"Quantidade de itens" deve retornar o tamanho do array', () => {
    expect(paginar(arr, 4, 5).qtdItens).toBe(arr.length);
  });

  it('"Quantidade de paginas" deve retornar a "quantidade de itens" divido por "limite de itens" arredondado para cima', () => {
    const qtdItens = arr.length;
    const limiteItens = 5;
    expect(paginar(arr, 4, limiteItens).qtdPaginas).toBe(Math.ceil(qtdItens / limiteItens));
  });

  it('"Dados" deve retornar os itens paginados ', () => {
    expect(JSON.stringify(paginar(arr, 1, 1).dados)).toBe('[1]');
  });
});
