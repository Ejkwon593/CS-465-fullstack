const mongoose = require('mongoose');
const Trip = require('../models/trips');

// GET all trips
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET one trip by ID
const tripsFindById = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.tripid);
    if (!trip) return res.status(404).json({ message: 'Trip not found' });
    res.status(200).json(trip);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST new trip
const tripsAddTrip = async (req, res) => {
  try {
    const trip = new Trip(req.body);
    const saved = await trip.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT update existing trip
const tripsUpdateTrip = async (req, res) => {
  try {
    const trip = await Trip.findByIdAndUpdate(req.params.tripid, req.body, { new: true });
    if (!trip) return res.status(404).json({ message: 'Trip not found' });
    res.status(200).json(trip);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE a trip
const tripsDeleteTrip = async (req, res) => {
  try {
    const trip = await Trip.findByIdAndDelete(req.params.tripid);
    if (!trip) return res.status(404).json({ message: 'Trip not found' });
    res.status(200).json({ message: 'Trip deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Export all controller functions
module.exports = {
  tripsList,
  tripsFindById,
  tripsAddTrip,
  tripsUpdateTrip,
  tripsDeleteTrip
};
