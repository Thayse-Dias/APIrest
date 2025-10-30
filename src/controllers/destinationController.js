const Destination = require('../models/destinationModel');

const destinationController = {
  create: (req, res) => {
    const { name, status, details, data } = req.body;
    const user_id = req.userId;

    if (!name || !status) {
      return res.status(400).json({ error: 'Nome e status são obrigatórios.' });
    }

    const allowedStatus = ['wishlist', 'planning', 'completed'];
    if (!allowedStatus.includes(status)) {
      return res.status(400).json({ 
        error: 'Status inválido. Deve ser: wishlist, planning ou completed.' 
      });
    }

    Destination.create({ user_id, name, status, details, data }, (err, result) => {
      if (err) return res.status(500).json({ error: 'Erro interno do servidor.' });
      res.status(201).json({ 
        message: 'Destino criado com sucesso.', 
        destinationId: result.id 
      });
    });
  },

  list: (req, res) => {
    const user_id = req.userId;
    Destination.findAllByUserId(user_id, (err, destinations) => {
      if (err) return res.status(500).json({ error: 'Erro interno do servidor.' });
      res.json(destinations);
    });
  },

  get: (req, res) => {
    const { id } = req.params;
    const user_id = req.userId;
    
    Destination.findById(id, (err, destination) => {
      if (err) return res.status(500).json({ error: 'Erro interno do servidor.' });
      if (!destination) return res.status(404).json({ error: 'Destino não encontrado.' });
      if (destination.user_id !== user_id) {
        return res.status(403).json({ error: 'Acesso negado.' });
      }
      res.json(destination);
    });
  },

  update: (req, res) => {
    const { id } = req.params;
    const { name, status, details, data } = req.body;
    const user_id = req.userId;

    // Verificar se o destino existe e pertence ao usuário
    Destination.findById(id, (err, destination) => {
      if (err) return res.status(500).json({ error: 'Erro interno do servidor.' });
      if (!destination) return res.status(404).json({ error: 'Destino não encontrado.' });
      if (destination.user_id !== user_id) {
        return res.status(403).json({ error: 'Acesso negado.' });
      }

      const allowedStatus = ['wishlist', 'planning', 'completed'];
      if (status && !allowedStatus.includes(status)) {
        return res.status(400).json({ 
          error: 'Status inválido. Deve ser: wishlist, planning ou completed.' 
        });
      }

      const updatedDestination = {
        name: name || destination.name,
        status: status || destination.status,
        details: details !== undefined ? details : destination.details,
        data: data !== undefined ? data : destination.data
      };

      Destination.update(id, updatedDestination, (err, result) => {
        if (err) return res.status(500).json({ error: 'Erro interno do servidor.' });
        if (result.changes === 0) {
          return res.status(404).json({ error: 'Destino não encontrado.' });
        }
        res.json({ message: 'Destino atualizado com sucesso.' });
      });
    });
  },

  delete: (req, res) => {
    const { id } = req.params;
    const user_id = req.userId;

    Destination.findById(id, (err, destination) => {
      if (err) return res.status(500).json({ error: 'Erro interno do servidor.' });
      if (!destination) return res.status(404).json({ error: 'Destino não encontrado.' });
      if (destination.user_id !== user_id) {
        return res.status(403).json({ error: 'Acesso negado.' });
      }

      Destination.delete(id, (err, result) => {
        if (err) return res.status(500).json({ error: 'Erro interno do servidor.' });
        if (result.changes === 0) {
          return res.status(404).json({ error: 'Destino não encontrado.' });
        }
        res.json({ message: 'Destino removido com sucesso.' });
      });
    });
  }
};

module.exports = destinationController;