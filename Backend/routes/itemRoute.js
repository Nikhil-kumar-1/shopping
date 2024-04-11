const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

// Get all items
router.get("/", itemController.getAllItems);

module.exports = router;