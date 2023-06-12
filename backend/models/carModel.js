const mongoose = require('mongoose');

// Building the required schema for each car
const carSchema = mongoose.Schema(
  {
    model: { type: Number, required: true },
    make: { type: String, required: true },
    regNumber: { type: String, required: true },
    owner: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Car', carSchema);
