const express = require("express");
const connectToDatabase = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors"); // Import the cors middleware

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS Configuration
app.use(cors()); // Enable CORS for all routes

// Connect to MongoDB
connectToDatabase();

// Routes
app.use("/", userRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Hello");
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
