const express = require("express");
// controllers
const {
  getAllUsers,
  registerUser,
  loginUser,
  getUserByID,
  adminLogin,
  logout,
} = require("../controller/userController");
const Authenticated = require("../middleware/auth");
// Router express
const userRouter = express.Router();

// Register user
userRouter.post("/register", registerUser);
// Login user
userRouter.post("/login", loginUser);
// Get users
userRouter.get("/getAll", Authenticated, getAllUsers);
// Get user by id
userRouter.get("/getById", Authenticated, getUserByID);
// Logout user
userRouter.get("/logout", logout);
// admin login
userRouter.post("/admin/login", adminLogin);

module.exports = userRouter;
