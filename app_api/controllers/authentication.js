const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../models/user');

// ================================
// Register new user
// ================================
const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields required' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const user = new User({ name, email });
    user.setPassword(password);
    await user.save();

    const token = user.generateJWT();
    res.status(200).json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ================================
// Login user
// ================================
const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields required' });
  }

  passport.authenticate('local', (err, user, info) => {
    if (err) return res.status(400).json(err);
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const token = user.generateJWT();
    res.status(200).json({ token });
  })(req, res);
};

module.exports = { register, login };