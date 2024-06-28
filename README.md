# brutal-forge :skull_and_crossbones:
<!-- <img width="50" src="https://cdn-icons-png.flaticon.com/512/1065/1065119.png"> -->

A API de metal brasileiro mais pesada da internet.

Tem como objetivo fortalecer a cena Underground do metal nacional.

## Endpoints

### Paises
#### Post

Endpoint: ```/paises```

| Dados | Tipos |
|-|-|
| nome | String |

#### Get (Todos Registros)
Endpoint: ```/paises```

#### Get (Um Registro)
Endpoint: ```/paises/:id```

#### Put
Endpoint: ```/paises/:id```

#### Delete
Endpoint: ```/paises/:id```

---

### Gêneros
#### Post

Endpoint: ```/generos```

| Dados | Tipos |
|-|-|
| nome | String |

#### Get (Todos Registros)

Endpoint: ```/generos```

#### Get (Um Registro)

Endpoint: ```/generos/:id```

#### Put

Endpoint: ```/generos/:id```

#### Delete

Endpoint: ```/generos/:id```

---

### Gravadoras
#### Post

Endpoint: ```/gravadoras```

| Dados | Tipos | Referêcia |
|-|-|-|
| nome | String |
| imagem | String |
| paisId | Integer (FK) | Paises |

#### Get (Todos Registros)

Endpoint: ```/gravadoras```

#### Get (Um Registro)

Endpoint: ```/gravadoras/:id```

#### Put

Endpoint: ```/gravadoras/:id```

#### Delete

Endpoint: ```/gravadoras/:id```

---

### Artistas
#### Post

Endpoint: ```/artisatas```

| Dados | Tipos | Referêcia |
|-|-|-|
| nome | String |
| dataFormacao | Date |
| ativo | Boolean |
| descricao | Text |
| imagem | String |
| generoId | Integer (FK) | Generos |
| paisId | Integer (FK) | Paises |

#### Get (Todos Registros)
Endpoint: ```/artisatas```

#### Get (Um Registro)
Endpoint: ```/artisatas/:id```

#### Put
Endpoint: ```/artisatas/:id```

#### Delete
Endpoint: ```/artisatas/:id```

---

### Álbuns
#### Post
Endpoint: ```/albuns```

| Dados | Tipos | Referêcia |
|-|-|-|
| titulo | String |
| dataLancamento | Date |
| imagem | String |
| artistaId | Integer (FK) | Artistas |
| gravadoraId | Integer (FK) | Gravadoras |

#### Get (Todos Registros)

Endpoint: ```/albuns```

#### Get (Um Registro)

Endpoint: ```/albuns/:id```

#### Put

Endpoint: ```/albuns/:id```

#### Delete

Endpoint: ```/albuns/:id```

---


### Faixas
#### Post

Endpoint: ```/albuns```

| Dados | Tipos | Referêcia |
|-|-|-|
| titulo | String |
| duracao | String |
| numFaixa | Integer |
| letra | Text |
| albumId | Integer (FK) | Álbuns |

#### Get (Todos Registros)

Endpoint: ```/albuns```

#### Get (Um Registro)

Endpoint: ```/albuns/:id```

#### Put

Endpoint: ```/albuns/:id```

#### Delete

Endpoint: ```/albuns/:id```

---

## Ordem de cadastro

|#|Model|
|-|-|
|1|Paises|
|2|Generos|
|3|Gravadoras|
|4|Artistas|
|5|Albuns|
|6|Faixas|


## Passos a seguir
- [x] **Planejamento**: Antes de começar a codificar, é importante planejar sua API. Defina claramente o propósito da API e identifique os principais recursos que ela deve ter.
- [x] **Design da API**: Decida sobre a arquitetura da API (REST, GraphQL, etc.). Desenhe os endpoints da API e decida sobre os métodos HTTP a serem usados (GET, POST, PUT, DELETE, etc.). 
- [x] **Desenvolvimento**: Comece a codificar a API usando a linguagem de programação e o framework de sua escolha. Certifique-se de seguir as melhores práticas de codificação.
- [ ] **Autenticação e Autorização**: Implemente mecanismos de segurança como autenticação (verificar quem está fazendo a solicitação) e autorização (verificar se o solicitante tem permissão para acessar os dados).
- [ ] **Tratamento de Erros**: Implemente um sistema robusto de tratamento de erros que retorne mensagens de erro claras e específicas.
- [ ] **Testes**: Escreva testes unitários e de integração para garantir que sua API esteja funcionando como esperado.
- [ ] **Documentação**: Documente sua API para que outros desenvolvedores saibam como usá-la. A documentação deve incluir informações sobre os endpoints, métodos HTTP, parâmetros, corpo da solicitação e respostas esperadas.
- [ ] **Versão**: Se você planeja fazer atualizações na sua API no futuro, implemente um sistema de versionamento desde o início.
- [ ] **Deploy**: Faça o deploy da sua API em um servidor. Você pode usar serviços de nuvem como AWS, Google Cloud, Azure, etc.
- [ ] **Monitoramento e Manutenção**: Depois que a API estiver em produção, você precisará monitorá-la para garantir que esteja funcionando corretamente e fazer manutenção conforme necessário.
---