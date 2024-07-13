const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");

// Routes related to user registration
router.post("/register", registerController.registerUser);
router.get("/users", registerController.getAllUsers);
router.put("/users/:id", registerController.updateUser);
router.delete("/users/:id", registerController.deleteUser);

module.exports = router;
