// cart controller
const User = require("../models/User");
const RestaurantMenu = require("../models/menuModel");

// Add to cart
const addToCart = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    console.log("user", req.user);
    const user = await User.findById(req.user);
    console.log(user);
    const item = await RestaurantMenu.findById(id);
    if (item) {
      if (user.cart.includes(id)) {
        res.status(400).json({
          status: "fail",
          message: "Item already in cart",
        });
      } else {
        user.cart.push(item);
        await user.save();
        res.status(200).json({
          status: "success",
          message: "Item added to cart",
        });
      }
    } else {
      res.status(400).json({
        status: "fail",
        message: "Item does not exist",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// Get cart items
const getCartItems = async (req, res) => {
  try {
    const user = await User.findById(req.user).populate("cart");
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

// Remove item from cart
const removeItem = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(req.user);
    const item = await RestaurantMenu.findById(id);
    if (item) {
      if (user.cart.includes(id)) {
        user.cart.pull(item);
        await user.save();
        res.status(200).json({
          status: "success",
          message: "Item removed from cart",
        });
      } else {
        res.status(400).json({
          status: "fail",
          message: "Item not in cart",
        });
      }
    } else {
      res.status(400).json({
        status: "fail",
        message: "Item does not exist",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

module.exports = { addToCart, getCartItems, removeItem };
