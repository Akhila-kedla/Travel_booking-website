const mongoose = require("mongoose");

const packageSchema = mongoose.Schema({
  title: String,
  price: Number,
  duration: String,
  destinationId: String,
});

module.exports = mongoose.model("Package", packageSchema);
