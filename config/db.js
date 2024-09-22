const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error; // You can also exit the process if needed: process.exit(1);
  }
};

module.exports = connectToDatabase;
