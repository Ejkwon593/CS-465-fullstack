const express = require('express');
const router = express.Router();

// Bring in the controller functions
const ctrlTrips = require('../controllers/trips');

// GET all trips → http://localhost:3000/api/trips
router.get('/trips', ctrlTrips.tripsList);

// GET one trip by code → http://localhost:3000/api/trips/BALI01
router.get('/trips/:tripCode', ctrlTrips.tripsFindByCode);

// Export router so app.js can use it
module.exports = router;
