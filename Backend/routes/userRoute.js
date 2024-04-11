const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

// Get user profile
router.get(
  "/profile",
  authMiddleware.authenticateUser,
  userController.getUserProfile
);

module.exports = router;
