const express = require('express');
const router = express.Router();

// bring in the trip functions from controller
const ctrlTrips = require('../controllers/trips');

// GET all trips → http://localhost:3000/api/trips
router.get('/trips', ctrlTrips.tripsList);

// GET one trip by code → http://localhost:3000/api/trips/:tripCode
router.get('/trips/:tripCode', ctrlTrips.tripsFindByCode);

// export this router so app.js can use it
module.exports = router;