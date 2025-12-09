const express = require("express");
const Destination = require("../models/Destination");
const router = express.Router();

// Add destination
router.post("/add", async (req, res) => {
  const data = await Destination.create(req.body);
  res.send(data);
});

// Get all destinations
router.get("/", async (req, res) => {
  const data = await Destination.find();
  res.send(data);
});

module.exports = router;
