require("dotenv").config();

const express = require("express");

// Requiring Mongoose
const mongoose = require("mongoose");

const menuRoutes = require("./routes/menu");
const userRouter = require("./routes/userRouter");

const app = express();
// Cors
var cors = require("cors");
// Cookie parser
const cookieParser = require("cookie-parser");

// middle ware
app.use(cors());
app.use(cookieParser());
app.use(express.json()); //we are doing this so that wen can use request body in out post requests

app.use("/api/menu", menuRoutes);
app.use("/auth", userRouter);

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
