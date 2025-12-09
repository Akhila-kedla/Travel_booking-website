const express = require("express");
const Booking = require("../models/Booking");
const router = express.Router();

// Add booking
router.post("/add", async (req, res) => {
  try {
    const data = await Booking.create(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all bookings
router.get("/", async (req, res) => {
  const data = await Booking.find();
  res.json(data);
});

module.exports = router;
