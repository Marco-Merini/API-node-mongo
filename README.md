# API CRUD

Uma API RESTful que permite realizar operações CRUD (Create, Read, Update, Delete) de usuários, utilizando Node.js com Express como framework e Prisma como ORM para conexão com MongoDB.

## 🚀 Tecnologias Utilizadas

* Node.js
* Express
* Prisma ORM
* MongoDB
* TypeScript

## 📋 Pré-requisitos

* Node.js instalado
* MongoDB instalado e configurado
* Uma string de conexão MongoDB válida

## ⚙️ Configuração do Ambiente

1. Clone o repositório:
   ```bash
   git clone https://github.com/Marco-Merini/API-node-mongo.git
   cd API-node-mongo
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   * Crie um arquivo `.env` na raiz do projeto
   * Adicione sua string de conexão MongoDB:
   ```env
   DATABASE_URL="sua-string-de-conexao-mongodb"
   ```

## 🎮 Rodando o Projeto

1. Inicie o servidor em modo de desenvolvimento:
   ```bash
   node --watch ./server.js
   ```

2. Para visualizar e gerenciar o banco de dados através da interface do Prisma Studio:
   ```bash
   npx prisma studio
   ```

## 🔗 Endpoints da API

### Listar todos os usuários
```http
GET /users
```

### Criar novo usuário
```http
POST /users

body: {
    "name": "Nome do Usuário",
    "age": "25",
    "email": "usuario@email.com"
}
```

### Atualizar usuário
```http
PUT /users/:id

body: {
    "name": "Novo Nome",
    "age": "26",
    "email": "novoemail@email.com"
}
```

### Deletar usuário
```http
DELETE /users/:id
```
