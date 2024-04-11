const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");
const authMiddleware = require("../middlewares/authMiddleware");

// Create cart
router.post("/", authMiddleware.authenticateUser, cartController.createCart);

module.exports = router;
