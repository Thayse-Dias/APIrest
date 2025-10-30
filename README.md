# Travel Destination API

API REST para gerenciamento de destinos de viagens, desenvolvida em Node.js com Express.

## Funcionalidades

- ✅ Registro de usuários
- ✅ Login de usuários
- ✅ Busca de informações do usuário logado
- ✅ Registro de destinos
- ✅ Listagem de todos os destinos do usuário
- ✅ Busca de detalhes de um destino específico
- ✅ Atualização de destinos
- ✅ Remoção de destinos

## Tecnologias Utilizadas

- Node.js
- Express.js
- SQLite (banco em memória)
- JWT (autenticação)
- bcrypt (criptografia de senhas)
- Swagger (documentação)

## Instalação e Execução

1. Instale as dependências:
```bash
npm install

Execute a aplicação:


bash
npm start
Acesse a documentação Swagger:

text
http://localhost:3000/api-docs
Estrutura da API
Autenticação
Todas as rotas de destinos requerem autenticação JWT. Inclua o token no header:

text
Authorization: Bearer <seu_token>
Endpoints
Usuários
POST /api/users/register - Registrar novo usuário

POST /api/users/login - Fazer login

GET /api/users/profile - Obter perfil do usuário logado

Destinos
POST /api/destinations - Criar novo destino

GET /api/destinations - Listar destinos do usuário

GET /api/destinations/:id - Buscar destino específico

PUT /api/destinations/:id - Atualizar destino

DELETE /api/destinations/:id - Excluir destino

Status de Destinos
wishlist - Lista de desejos

planning - Em planejamento

completed - Concluído

Exemplos de Uso
Registro de Usuário
json
POST /api/users/register
{
  "name": "João Silva",
  "email": "joao@email.com",
  "phone": "11999999999",
  "password": "senha123"
}
Login
json
POST /api/users/login
{
  "email": "joao@email.com",
  "password": "senha123"
}
Criar Destino
json
POST /api/destinations
Authorization: Bearer <token>
{
  "name": "Paris",
  "status": "wishlist",
  "details": "Visitar Torre Eiffel",
  "data": "2024"
}
Estrutura do Projeto
text
src/
├── controllers/    # Lógica dos endpoints
├── middleware/     # Autenticação JWT
├── models/         # Modelos de dados
├── routes/         # Definição de rotas
├── services/       # Lógica de negócio
└── app.js          # Configuração do Express
text

## Como Executar

1. **Instale as dependências:**
```bash
npm install
Execute a aplicação:

bash
npm start
Acesse a documentação:

text
http://localhost:3000/api-docs
A API está completamente funcional com todas as especificações solicitadas:

✅ Autenticação JWT

✅ CRUD completo de destinos

✅ Validações e tratamento de erros

✅ Documentação Swagger

✅ Banco em memória SQLite

✅ Arquitetura em camadas