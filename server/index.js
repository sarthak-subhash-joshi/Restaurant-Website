require("dotenv").config();

const express = require("express");
const app = express();
// Requiring Mongoose
const mongoose = require("mongoose");
// Cors
var cors = require("cors");
// Cookie parser
const cookieParser = require("cookie-parser");
// Routers
const userRouter = require("./routes/userRouter");
const menuRoutes = require("./routes/menuRouter");
const cartRouter = require("./routes/cartRouter");
const Authenticated = require("./middleware/auth");

// middle ware
app.use(cors());
app.use(cookieParser());
app.use(express.json()); //we are doing this so that wen can use request body in out post requests

// Routes
app.use("/api/menu", menuRoutes);
app.use("/auth", userRouter);
app.use("/cart", Authenticated, cartRouter);

// connecting to database

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port " + process.env.port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
