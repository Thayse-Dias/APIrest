# Travel Destination API

API REST para gerenciamento de destinos de viagens, desenvolvida em Node.js com Express.

## ✨ Funcionalidades

👤 Gestão de Usuários

- Registro de novos usuários - Crie sua conta com nome, email, telefone e senha

- Autenticação segura - Login com JWT para acesso protegido

- Perfil do usuário - Consulte suas informações de forma segura

🗺️ Gestão de Destinos

- Criação de destinos - Registre novos destinos com nome e status obrigatórios

- Listagem personalizada - Veja todos os seus destinos organizados

- Detalhes completos - Acesse informações específicas de cada destino

- Atualização flexível - Modifique destinos conforme seu planejamento evolui

- Exclusão segura - Remova destinos quando necessário

🔒 Status de Destinos

📝 Wishlist - Lista de desejos para viagens futuras

📅 Planning - Viagens em fase de planejamento

✅ Completed - Destinos já visitados

##  🛠 Tecnologias Utilizadas

- Node.js
- Express.js
- SQLite (banco em memória)
- JWT (autenticação)
- bcrypt (criptografia de senhas)
- Swagger (documentação)

## 🚀 Instalação e Execução

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Passos para instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/travel-destination-api.git
   cd travel-destination-api

2. **Instale as dependências:**

```bash
npm install
```

3. **Execute a aplicação:**
```bash
npm start
```

4. **Acesse a documentação:**
Abra seu navegador e acesse:
```bash
http://localhost:3000/api-docs
```

📡 Estrutura da API
Autenticação

A maioria dos endpoints requer autenticação via JWT. Inclua o token no header das requisições:

```bash
Authorization: Bearer <seu_token_jwt>
```

Endpoints Principais

👤 Usuários

Método	Endpoint	Descrição

- POST	/api/users/register	Registrar novo usuário

- POST	/api/users/login	Fazer login

- GET	/api/users/profile	Obter perfil do usuário logado

🗺️ Destinos

Método	Endpoint	Descrição

- POST	/api/destinations	Criar novo destino

- GET	/api/destinations	Listar destinos do usuário

- GET	/api/destinations/:id	Buscar destino específico

- PUT	/api/destinations/:id	Atualizar destino

- DELETE	/api/destinations/:id	Excluir destino

Status de Destinos

Status	Descrição

wishlist	Lista de desejos - lugares que você quer visitar

planning	Em planejamento - viagem sendo organizada

completed	Concluído - lugares que você já visitou

💡 Exemplos de Uso

1. **Registro de Usuário:**
```bash
POST /api/users/register
Content-Type: application/json

{
  "name": "João Silva",
  "email": "joao@email.com",
  "phone": "11999999999",
  "password": "senha123"
}
```

2. **Login:**
```bash
POST /api/users/login
Content-Type: application/json

{
  "email": "joao@email.com",
  "password": "senha123"
}
```
   
3. **Criar Destino (requer autenticação)**
```bash
POST /api/destinations
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Paris, França",
  "status": "wishlist",
  "details": "Visitar Torre Eiffel e Museu do Louvre",
  "data": "2024"
}
```
📁 Estrutura do Projeto
```bash
travel-destination-api/
├── src/
│   ├── controllers/     # Lógica dos endpoints
│   │   ├── userController.js
│   │   └── destinationController.js
│   ├── middleware/      # Autenticação e outros middlewares
│   │   └── authMiddleware.js
│   ├── models/          # Modelos de dados e acesso ao banco
│   │   ├── database.js
│   │   ├── userModel.js
│   │   └── destinationModel.js
│   ├── routes/          # Definição das rotas
│   │   ├── userRoutes.js
│   │   └── destinationRoutes.js
│   ├── app.js           # Configuração do Express
│   └── server.js        # Ponto de entrada da aplicação
├── resources/
│   └── swagger.json     # Documentação Swagger
├── package.json
└── README.md
```
🔧 Desenvolvimento
Para executar em modo de desenvolvimento com atualização automática:
```bash
npm run dev
```

🎯 Funcionalidades Implementadas

- Autenticação JWT

- CRUD completo de destinos

- Validações e tratamento de erros

- Documentação Swagger integrada

- Banco de dados em memória SQLite

- Arquitetura em camadas (MVC)

- Criptografia de senhas

- Middleware de autenticação

🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

- Fork o projeto

- Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)

- Commit suas mudanças (git commit -m 'Add some AmazingFeature')

- Push para a branch (git push origin feature/AmazingFeature)

- Abra um Pull Request

*Desenvolvido para uso acadêmico.*
