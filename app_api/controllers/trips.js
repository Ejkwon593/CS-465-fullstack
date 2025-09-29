const mongoose = require('mongoose');
const Trip = mongoose.model('trips'); // use the trips model we made

// show all trips
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({});
    res.status(200).json(trips); // send all trips back
  } catch (err) {
    res.status(500).json({ message: 'Error getting trips' });
  }
};

// show one trip by code
const tripsFindByCode = async (req, res) => {
  try {
    const trip = await Trip.findOne({ code: req.params.tripCode });
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    res.status(200).json(trip); // send that trip back
  } catch (err) {
    res.status(500).json({ message: 'Error getting trip' });
  }
};

// export so routes can use it
module.exports = {
  tripsList,
  tripsFindByCode
};