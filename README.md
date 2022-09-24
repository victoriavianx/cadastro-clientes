# Cadastro de Clientes

_Contacte: organize seus contatos_

## Sobre

Esta é uma aplicação full-stack para cadastrar clientes e cadastrar contatos, afim de organiza-los.

## Desenvolvimento

A criação da API foi Express com TypeScript, além disso foi feito uma conexão do projeto com um banco de dados PostgreSQL e para fazer a comunicação entre o banco e o código, foi usado TypeORM - incluindo os conceitos de Entities e Migrations. O desenvolvimento da parte do cliente (_frontend_) foi utilizado React + TypeScript e as páginas foram estilizadas com Chakra UI e Styled-Components. Para diminuir a repetição de props sendo passadas pelos componentes, desenvolvi a aplicação com Context para gerenciar os estados de forma global e simples.

## Documentação da API

→ <a name="doc" target="_blank" href="https://victoriavianx.github.io/cadastro-clientes-doc/">Link da Documentação</a>

## Features

  - Cadastro de Cliente
  - Login
  - Cadastro de Contato
  - Listagem de Contato
  - Atualização de Contato
  - Deleção de Contato
  - Atualização de Cliente
  - Deleção de Cliente

## Instalação

### 1. Server

1.1. Crie um banco de dados com PostgreSQL
1.2. Instale as dependências necessárias do projeto utilizando o comando:

```
yarn install
```

1.3. Adicione na raiz do projeto um arquivo chamado `.env` e dentro dele configure as variáveis de ambiente de acordo com o arquivo `.env.example`

```
DB_HOST=
DB_PASSWORD=
DB=
DB_USER=
JWT_SECRET=
```

1.4. Rode as migrations do projeto com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```

1.5. Para rodar o projeto utilize o comando `yarn dev` no terminal, se tudo der certo receberá uma mensagem como essa:

```
query: SELECT * FROM current_schema()
query: CREATE EXTENSION IF NOT EXISTS "uuid-ossp"
query: SELECT version();
App is running!
```

<hr/>

### 2. Client

2.1. Instale as dependências do projeto com o comando:

```
yarn install
```

2.3. Para rodar o projeto utilize o comando `yarn start` no terminal, você será redirecionado para seu navegador local.

⚠️ <b>Antes de usar a aplicação no navegador, lembre de rodar a parte do server para as requisições funcionarem apropriadamente!</b>

<hr/>

#### Obrigada por chegar até aqui!
Feito com ❤️ por [Victoria](https://github.com/victoriavianx)
