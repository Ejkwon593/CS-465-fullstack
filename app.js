// ================================
// Load environment variables
// ================================
require('dotenv').config();

// ================================
// Import core modules
// ================================
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');
const createError = require('http-errors');

// ================================
// Connect to MongoDB
// ================================
require('./app_api/db');

// ================================
// Load Passport config
// ================================
require('./app_api/config/passport');

// ================================
// Import API routes
// ================================
const tripsRouter = require('./app_api/routes/trips');
const authRouter = require('./app_api/routes/auth');

// ================================
// Initialize Express app
// ================================
const app = express();

// ================================
// Middleware setup
// ================================
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());

// ================================
// Serve static files (optional)
// ================================
app.use(express.static(path.join(__dirname, 'public')));

// ================================
// Enable CORS (for Angular frontend)
// ================================
app.use(
  cors({
    origin: 'http://localhost:4200', // Angular frontend
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
  })
);

// ================================
// API Routes
// ================================
app.use('/api/trips', tripsRouter);
console.log('✅ Trips router mounted at /api/trips');

app.use('/api/auth', authRouter);
console.log('✅ Auth router mounted at /api/auth');

// ================================
// Catch 404 errors for unknown routes
// ================================
app.use((req, res, next) => {
  next(createError(404, 'Not Found'));
});

// ================================
// Handle unauthorized JWT errors
// ================================
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ message: 'UnauthorizedError' });
  } else {
    next(err);
  }
});

// ================================
// Global error handler
// ================================
app.use((err, req, res, next) => {
  console.error('❌ Error:', err.message);
  res.status(err.status || 500).json({
    error: true,
    message: err.message,
  });
});

// ================================
// Start the server
// ================================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Travlr API running on http://localhost:${PORT}`);
  console.log('✅ MongoDB connected and API ready.');
});

module.exports = app;