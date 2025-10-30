const express = require('express');
const destinationController = require('../controllers/destinationController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Todas as rotas exigem autenticação
router.post('/', authMiddleware, destinationController.create);
router.get('/', authMiddleware, destinationController.list);
router.get('/:id', authMiddleware, destinationController.get);
router.put('/:id', authMiddleware, destinationController.update);
router.delete('/:id', authMiddleware, destinationController.delete);

module.exports = router;