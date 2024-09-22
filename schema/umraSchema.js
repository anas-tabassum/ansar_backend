const mongoose = require("mongoose");

const travelerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const bookingSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  ageRestriction: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  comments: {
    type: String, // Not required
  },
  country: {
    type: String,
    required: true,
  },
  dietaryRestriction: {
    type: String,
    required: true,
  },
  disabilities: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  firstLanguage: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  travelers: {
    type: [travelerSchema], // Array of traveler objects
    required: true,
  },
});

const umraBook = mongoose.model("umra_booking", bookingSchema);

module.exports = umraBook;
