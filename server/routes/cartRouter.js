const express = require("express");
// Router express
const cartRouter = express.Router();
// controllers
const { addToCart, getCartItems } = require("../controller/cartController.js");

// Routes
cartRouter.post("/addToCart/:id", addToCart);
cartRouter.get("/getCartItems", getCartItems);

module.exports = cartRouter;
