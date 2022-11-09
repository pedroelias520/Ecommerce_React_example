const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  daysToComplete: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Service = mongoose.model("service", serviceSchema);

module.exports = Service;
