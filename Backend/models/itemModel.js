const mongoose = require("mongoose");

// Define the schema for the Item model
const itemSchema = new mongoose.Schema({
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
  // You can add more fields as needed
});

// Create the Item model from the schema
const Item = mongoose.model("Item", itemSchema);

// Export the Item model
module.exports = Item;
