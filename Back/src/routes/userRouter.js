const { Router } = require('express');
const router = Router();

const { login } = require('../controller/userController');

// POST
router.post('/login', login);

module.exports = router;