const Item = require("../models/itemModel");

// Get all items
const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json({ items });
  } catch (error) {
    console.error("Error getting items:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getAllItems };
