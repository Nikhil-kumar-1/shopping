const mongoose = require("mongoose");

// Define the schema for the Cart model
const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item", // Reference to the Item model
      required: true,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Cart model from the schema
const Cart = mongoose.model("Cart", cartSchema);

// Export the Cart model
module.exports = Cart;
