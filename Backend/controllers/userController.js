const User = require("../models/userModel");

// Get user profile
const getUserProfile = async (req, res) => {
  try {
    const userId = req.userId; // Extracted from token in authentication middleware
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    console.error("Error getting user profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getUserProfile };
