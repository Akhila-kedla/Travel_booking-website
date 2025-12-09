const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Add user
router.post("/add", async (req, res) => {
  const data = await User.create(req.body);
  res.send(data);
});

// Get all users
router.get("/", async (req, res) => {
  const data = await User.find();
  res.send(data);
});

module.exports = router;
