# API CRUD com Node.js, Express e Prisma

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
   git clone [url-do-seu-repositorio]
   cd [nome-do-seu-diretorio]
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

4. Execute as migrações do Prisma:
   ```bash
   npx prisma generate
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

## 📝 Estrutura do Projeto

```
├── node_modules
├── prisma
│   └── schema.prisma
├── package.json
├── server.js
└── .env
```

## 🔍 Schema do Usuário

```prisma
model User {
  id      String   @id @default(auto()) @map("_id") @db.ObjectId
  email   String   @unique
  name    String
  age     String
}
```

## 📦 Dependências Principais

```json
{
  "@prisma/client": "^5.21.1",
  "express": "^4.21.1",
  "prisma": "^5.21.1"
}
```

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## ✨ Autor

Feito por Marco Leone Merini.
