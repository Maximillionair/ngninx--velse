const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskcontroller');

router.get('/:difficulty', taskController.getTaskByDifficulty);

module.exports = router;