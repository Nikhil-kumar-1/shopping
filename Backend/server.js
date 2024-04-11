const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/dbconnection"); // Import database connection
const authMiddleware = require("./middlewares/authMiddleware"); // Import authentication middleware
const authRoutes = require("./routes/authRoute"); // Import authentication routes
const userRoutes = require("./routes/userRoute"); // Import user routes
const cartRoutes = require("./routes/cartRoute"); // Import cart routes
const itemRoutes = require("./routes/itemRoute"); // Import item routes
const orderRoutes = require("./routes/orderRoute"); // Import order routes

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Create Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes); // Authentication routes
app.use("/api/users", authMiddleware.authenticateUser, userRoutes); // User routes with authentication middleware
app.use("/api/carts", authMiddleware.authenticateUser, cartRoutes); // Cart routes with authentication middleware
app.use("/api/items", itemRoutes); // Item routes
app.use("/api/orders", authMiddleware.authenticateUser, orderRoutes); // Order routes with authentication middleware

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
