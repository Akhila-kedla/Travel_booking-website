const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // ⭐ VERY IMPORTANT
app.use(cors());
app.use(express.static("public"));

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/travelSimple")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/destinations", require("./routes/destination"));
app.use("/packages", require("./routes/package"));
app.use("/users", require("./routes/user"));
app.use("/bookings", require("./routes/booking"));

app.listen(5000, () => console.log("Server running on port 5000"));
