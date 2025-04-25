const Task = require('../models/task');
const config = require('../../config/config');

exports.getIndex = (req, res) => {
  const tasks = Task.getAllTasks();
  res.render('home/index', {
    title: 'Oppgaveportal - Forsiden',
    siteName: config.siteName,
    tasks: tasks
  });
};