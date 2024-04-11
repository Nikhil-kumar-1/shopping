const Cart = require("../models/cartModel");

// Create cart
const createCart = async (req, res) => {
  try {
    const { userId, items } = req.body;

    // Check if cart already exists for the user
    const existingCart = await Cart.findOne({ user: userId });
    if (existingCart) {
      return res
        .status(400)
        .json({ message: "Cart already exists for the user" });
    }

    // Create a new cart
    const newCart = new Cart({ user: userId, items });
    await newCart.save();

    res
      .status(201)
      .json({ message: "Cart created successfully", cart: newCart });
  } catch (error) {
    console.error("Error creating cart:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { createCart };
