const Trip = require('../models/trips');

// trips list
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({});
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// finde trips with code
const tripsFindByCode = async (req, res) => {
  try {
    const trip = await Trip.findOne({ code: req.params.tripCode });
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    res.status(200).json(trip);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  tripsList,
  tripsFindByCode
};