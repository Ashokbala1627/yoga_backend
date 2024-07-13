const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGO_URI;

async function connectToDatabase() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected Successfully");
  } catch (err) {
    console.error("Database connection error:", err);
  }
}

module.exports = connectToDatabase;
