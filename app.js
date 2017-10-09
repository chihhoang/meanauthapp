const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect to MongoDB
mongoose.connect(config.database);

// Verify databse connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database ' + config.database);
});

mongoose.connection.on('error', (error) => {
  console.log('Database error ' + error);
});

const app = express();

// Express route
const users = require('./routes/users');

// Port number
const port = 3000;

// CORS middleware
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.json());

app.use('/users', users);

// Index route
app.get('/', (req, res) => {
  res.send('Invalid endpoint');
})

// Start server
app.listen(port, () => {
  console.log('Server started on port ' + port);
});






