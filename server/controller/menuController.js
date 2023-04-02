// Requiring model which has db schema
const Menu = require("../models/menuModel");

// requiring mongoose
const mongoose = require("mongoose");

// Getting all workouts

const getAllItems = async (req, res) => {
  const items = await Menu.find({}).sort({ createdAt: -1 });
  res.status(200).json(items);
};

// Get single workout
const getSingleItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Item Exists !" });
  }

  const item = await Menu.findById(id);

  if (!item) {
    return res.status(404).json({ error: "No such Item Exists ! " });
  }

  res.status(200).json(item);
};

// create new workout

const createItem = async (req, res) => {
  const { title, img_url, discount, price, description } = req.body;

  try {
    const item = await Menu.create({
      title,
      img_url,
      discount,
      price,
      description,
    });
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ error: error.mesage });
  }
};

// Delete a workout

const deleteItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Item Exists !" });
  }

  const item = await Menu.findOneAndDelete({ _id: id });

  if (!item) {
    return res.status(404).json({ error: "No such Item Exists ! " });
  }

  res.status(200).json(item);
};

// Update a Workout

const updateItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Item Exists !" });
  }

  const item = await Menu.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!item) {
    return res.status(404).json({ error: "No such Item Exists ! " });
  }

  res.status(200).json(item);
};

module.exports = {
  createItem,
  getAllItems,
  getSingleItem,
  deleteItem,
  updateItem,
};
