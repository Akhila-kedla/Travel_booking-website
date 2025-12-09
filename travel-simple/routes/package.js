const express = require("express");
const Package = require("../models/Package");
const router = express.Router();

// Add package
router.post("/add", async (req, res) => {
  const data = await Package.create(req.body);
  res.send(data);
});

// Get all packages
router.get("/", async (req, res) => {
  const data = await Package.find();
  res.send(data);
});

module.exports = router;
