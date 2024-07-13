const RegisterUser = require("../models/registerModels");

// Controller functions
//register
exports.registerUser = async (req, res) => {
  try {
    const { email, ...rest } = req.body;

    const existingUser = await RegisterUser.findOne({
      email: email.toLowerCase(),
    });
    if (existingUser) {
      return res
        .status(409)
        .json({
          message: "Email already exists. Please use a different email.",
        });
    }
    const newUser = new RegisterUser({ email: email.toLowerCase(), ...rest });
    const savedUser = await newUser.save();
    res
      .status(201)
      .json({ message: "Registration successful!", user: savedUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//get users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await RegisterUser.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update users
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await RegisterUser.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({ message: "User updated successfully!", user: updatedUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//delte user
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await RegisterUser.findByIdAndDelete(id);
    res.json({ message: "User deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
