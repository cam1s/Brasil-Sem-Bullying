const { Router } = require('express');
const router = Router();

const { storeTask } = require('../controller/taskController');

// GET
router.post('/store/task', storeTask);

module.exports = router;