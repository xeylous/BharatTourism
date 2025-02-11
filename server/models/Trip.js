const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }, // URL of image
  facilities: [{ type: String, required: true }], // List of facilities
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  price: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Trip', tripSchema);
