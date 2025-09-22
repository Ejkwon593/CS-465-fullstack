var express = require('express');
var router = express.Router();
const controller = require('../controllers/traveler');

// Route for Travel Page
router.get('/', controller.travel);

module.exports = router;

