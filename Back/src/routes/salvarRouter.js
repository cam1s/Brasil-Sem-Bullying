const { Router } = require('express');
const router = Router();

const { salvarPost, adicionarPost } = require('../controller/salvoController');

// POST

// Serve para guardar dentro do banco
router.post('/post', salvarPost);

// serve para buscar os posts
router.post('/buscarPosts', adicionarPost);

module.exports = router;