const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const JWT_SECRET = 'seu_jwt_secret_super_seguro'; // Em produção, use variável de ambiente

const userController = {
  register: (req, res) => {
    const { name, email, phone, password } = req.body;

    // Validações básicas
    if (!name || !email || !password) {
      return res.status(400).json({ 
        error: 'Nome, email e senha são obrigatórios.' 
      });
    }

    User.create({ name, email, phone, password }, (err, result) => {
      if (err) {
        if (err.message.includes('UNIQUE constraint failed: users.email')) {
          return res.status(409).json({ error: 'Email já está em uso.' });
        }
        return res.status(500).json({ error: 'Erro interno do servidor.' });
      }
      res.status(201).json({ 
        message: 'Usuário criado com sucesso.', 
        userId: result.id 
      });
    });
  },

  login: (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email e senha são obrigatórios.' });
    }

    User.findByEmail(email, (err, user) => {
      if (err) return res.status(500).json({ error: 'Erro interno do servidor.' });
      if (!user) return res.status(401).json({ error: 'Credenciais inválidas.' });

      bcrypt.compare(password, user.password, (err, result) => {
        if (err) return res.status(500).json({ error: 'Erro interno do servidor.' });
        if (!result) return res.status(401).json({ error: 'Credenciais inválidas.' });

        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '24h' });
        res.json({ 
          token, 
          user: { 
            id: user.id, 
            name: user.name, 
            email: user.email, 
            phone: user.phone 
          } 
        });
      });
    });
  },

  getProfile: (req, res) => {
    const userId = req.userId;
    User.findById(userId, (err, user) => {
      if (err) return res.status(500).json({ error: 'Erro interno do servidor.' });
      if (!user) return res.status(404).json({ error: 'Usuário não encontrado.' });
      res.json(user);
    });
  }
};

module.exports = { userController, JWT_SECRET };