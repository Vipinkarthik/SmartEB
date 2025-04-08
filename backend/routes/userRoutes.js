// routes/userRoutes.js
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const router = express.Router();

// Signup
router.post('/signup', async (req, res) => {
  const { name, email, mobile, address, password } = req.body;

  if (!name || !email || !mobile || !address || !password) {
    return res.json({ success: false, message: 'All fields are required.' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: 'User already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      mobile,
      address,
      password: hashedPassword,
    });

    await newUser.save();
    res.json({ success: true, message: 'User registered successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Signup error.' });
  }
});

// Login
// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.json({ success: false, message: 'Invalid credentials' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.json({ success: false, message: 'Invalid credentials' });
      }
  
      res.json({
        success: true,
        message: 'Login successful',
        userId: user._id,
        name: user.name, // ✅ return user's name
      });      
    } catch (error) {
      res.status(500).json({ success: false, message: 'Login error' });
    }
  });
  

// GET user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
