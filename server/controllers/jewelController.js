const Jewellery = require('../models/Jewellery');

const getAllJewellery = async (req, res) => {
  const items = await Jewellery.find();
  res.json(items);
};

const addJewellery = async (req, res) => {
  try {
    const newItem = new Jewellery(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getAllJewellery, addJewellery };