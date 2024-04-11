const Order = require("../models/orderModel");

// Controller function to create a new order
const createOrder = async (req, res) => {
  try {
    // Extract necessary data from request body
    const { items, totalPrice } = req.body;

    // Check if items and totalPrice are provided
    if (!items || !totalPrice) {
      return res
        .status(400)
        .json({ message: "Items and totalPrice are required" });
    }

    // Create a new order
    const newOrder = new Order({
      user: req.userId, // Assuming user ID is attached to request object by authentication middleware
      items,
      totalPrice,
    });

    // Save the order to the database
    await newOrder.save();

    // Respond with success message and created order data
    return res
      .status(201)
      .json({ message: "Order created successfully", order: newOrder });
  } catch (error) {
    console.error("Error creating order:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { createOrder };
