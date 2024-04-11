const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// Middleware to authenticate user
const authenticateUser = async (req, res, next) => {
  try {
    // Get token from header
    const token = req.header("Authorization");

    // Check if token exists
    if (!token) {
      return res
        .status(401)
        .json({ message: "Authorization denied, token not provided" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if user exists
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res
        .status(401)
        .json({ message: "Authorization denied, user not found" });
    }

    // Attach user ID to request object
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error("Error authenticating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { authenticateUser };
