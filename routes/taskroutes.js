const express = require('express');
const router = express.Router();
const taskController = require('../app/controllers/taskController');

router.get('/:difficulty', taskController.getTaskByDifficulty);

module.exports = router;