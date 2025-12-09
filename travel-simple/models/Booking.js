const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: String,
  packageId: String,
  bookingDate: String,
  status: String,
});

module.exports = mongoose.model("Booking", bookingSchema);
