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
