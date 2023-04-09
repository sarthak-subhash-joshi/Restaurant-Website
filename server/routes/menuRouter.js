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
const Authenticated_owner = require("../middleware/owner_auth");

// get app workouts
router.get("/", getAllItems);

// get single workout
router.get("/:id", getSingleItem);

// post all workouts
router.post("/", Authenticated_owner, createItem);

// delete a workout
router.delete("/:id", Authenticated_owner, deleteItem);

//update a workout
router.patch("/:id", updateItem);

module.exports = router;
