const Task = require('../models/task');
const config = require('../../config/config');

exports.getTaskByDifficulty = (req, res) => {
  const difficulty = req.params.difficulty;
  const task = Task.getTaskByDifficulty(difficulty);
  
  if (!task) {
    return res.status(404).render('partials/error', {
      title: '404 - Oppgave ikke funnet',
      message: 'Oppgaven du leter etter finnes ikke.'
    });
  }
  
  res.render(`tasks/${difficulty}`, {
    title: `${task.title} - ${task.subtitle}`,
    siteName: config.siteName,
    task: task
  });
};