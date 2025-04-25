const express = require('express');
const path = require('path');
const morgan = require('morgan');
const config = require('./config/config');

// Initializing app
const app = express();

// Logging middleware
app.use(morgan('dev'));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app/views'));

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes/homeRoutes'));
app.use('/tasks', require('./routes/taskRoutes'));

// Handle 404
app.use((req, res) => {
  res.status(404).render('partials/error', { 
    title: '404 - Side ikke funnet',
    message: 'Siden du leter etter finnes ikke.' 
  });
});

// Start server
const PORT = process.env.PORT || config.port;
app.listen(PORT, () => {
  console.log(`Server kjører på port ${PORT}`);
});