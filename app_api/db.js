const mongoose = require('mongoose');

// Connection string to your MongoDB (replace with your own if needed)
const dbURI = 'mongodb://localhost:27017/travlr';

// Connect to MongoDB
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Log successful connection
mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});

// Log connection error
mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});

// Log disconnection
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Close connection when Node process ends
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  });
});

// Load models
require('./models/trips');
