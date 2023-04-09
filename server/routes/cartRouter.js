const express = require("express");
// Router express
const cartRouter = express.Router();
// controllers
const {
  addToCart,
  getCartItems,
  removeItem,
} = require("../controller/cartController.js");

// Routes
cartRouter.post("/addToCart/:id", addToCart);
cartRouter.get("/getCartItems", getCartItems);
cartRouter.delete("/removeItem/:id", removeItem);

module.exports = cartRouter;
