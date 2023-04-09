const Authenticated = require("../middleware/auth.js");
const User = require("../models/User.js");
// jwt
const jwt = require("jsonwebtoken");

// bcrypt
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    const newUser = await user.save();
    if (newUser) {
      res.status(201).json({
        status: "success",
        data: {
          newUser,
        },
        message: "User registered successfully",
      });
    } else {
      res.status(400).json({
        status: "fail",
        message: "Error registering user",
      });
    }
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({
        status: "fail",
        message: "User already exists",
      });
    } else {
      res.status(400).json({
        status: "fail",
        message: error.message,
      });
    }
  }
};

const getAllUsers =
  (Authenticated,
  async (req, res) => {
    try {
      const users = await User.find({});
      res.status(200).json({
        status: "success",
        data: {
          users,
        },
        message: "All users fetched successfully",
      });
    } catch (error) {
      res.status(400).json({
        status: "fail",
        message: error.message,
      });
    }
  });

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user != null) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const token = jwt.sign(
          { user_id: user._id, owner: user.isOwner },
          process.env.SECRET_KEY
        );
        res.cookie("jwt", token, { httpOnly: true, maxAge: 2592000000 });
        res.status(200).json({
          status: "success",
          data: {
            user,
          },
          token,
          message: "User logged in successfully",
        });
      } else {
        res.status(400).json({
          status: "fail",
          message: "Invalid credentials",
        });
      }
    } else {
      res.status(400).json({
        status: "fail",
        message: "User does not exist",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

const getUserByID = async (req, res) => {
  try {
    const user = await User.findById(req.user);
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

const logout = (req, res) => {
  res.clearCookie("jwt");
  res.status(200).json({
    status: "success",
    message: "User logged out successfully",
  });
};

module.exports = {
  getAllUsers,
  registerUser,
  loginUser,
  getUserByID,
  logout,
};
