const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');
const jwt = require('jsonwebtoken');

// Middleware JWT validation
function authenticateJWT(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.sendStatus(401);

  const token = authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
    if (err) return res.sendStatus(401);
    req.auth = verified;
    next();
  });
}

// Public routes
router.get('/', tripsController.tripsList);
router.get('/:tripid', tripsController.tripsFindById);

// Protected routes
router.post('/', authenticateJWT, tripsController.tripsAddTrip);
router.put('/:tripid', authenticateJWT, tripsController.tripsUpdateTrip);
router.delete('/:tripid', authenticateJWT, tripsController.tripsDeleteTrip);

module.exports = router;
