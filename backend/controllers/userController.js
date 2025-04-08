const User = require('../models/User');
const bcrypt = require('bcrypt');

// Signup
exports.signupUser = async (req, res) => {
  try {
    const { email, password, mobile } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // 🔐 hash password

    const newUser = new User({ email, password: hashedPassword, mobile });
    await newUser.save();

    return res.status(201).json({ success: true, message: "User created" });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

// Login
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password); // ✅ compare hashed password
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    return res.status(200).json({ success: true, message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
