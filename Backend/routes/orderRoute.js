const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const authMiddleware = require("../middlewares/authMiddleware");

// Create order
router.post("/", authMiddleware.authenticateUser, orderController.createOrder);

module.exports = router;
