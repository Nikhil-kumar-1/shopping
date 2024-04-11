const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/ECOMMERCE-PROJECT");
    console.log("Connected to database");
  } catch (err) {
    console.error("Error connecting to database:", err);
    process.exit(1); // Exit the application on error
  }
};

module.exports = connectDB;
