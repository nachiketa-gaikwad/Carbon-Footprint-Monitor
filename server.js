const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Serve frontend (IMPORTANT)
app.use(express.static(path.join(__dirname, "public")));

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/loginDB")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.log(err));

// User Schema
const User = mongoose.model("User", new mongoose.Schema({
  email: String,
  password: String
}));

// Register Route
app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  const exists = await User.findOne({ email });
  if (exists) return res.json({ error: "Email already registered" });

  await User.create({ email, password });
  res.json({ message: "Register successful" });
});

// Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || user.password !== password) {
    return res.json({ error: "Invalid email or password" });
  }

  res.json({ message: "Login successful" });
});

// Start Server
app.listen(5000, () => console.log("✅ Backend running on http://localhost:5000"));
