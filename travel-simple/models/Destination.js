const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
  name: String,
  country: String,
  bestSeason: String,
});

module.exports = mongoose.model("Destination", destinationSchema);
