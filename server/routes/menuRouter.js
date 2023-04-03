const express = require("express");

const router = express.Router(); //requiring express router inorder to use app in this

const {
  createItem,
  getAllItems,
  getSingleItem,
  deleteItem,
  updateItem,
} = require("../controller/menuController");
const Authenticated = require("../middleware/auth");

// get app workouts
router.get("/", Authenticated, getAllItems);

// get single workout
router.get("/:id", getSingleItem);

// post all workouts
router.post("/", createItem);

// delete a workout
router.delete("/:id", deleteItem);

//update a workout
router.patch("/:id", updateItem);

module.exports = router;
