const mongoose = require("mongoose");

// Define the schema for the Order model
const orderSchema = new mongoose.Schema({
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
  totalPrice: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Order model from the schema
const Order = mongoose.model("Order", orderSchema);

// Export the Order model
module.exports = Order;
