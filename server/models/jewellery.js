const mongoose = require('mongoose');

const JewellerySchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  category: String,
  inStock: Boolean,
  logo: String
});

module.exports = mongoose.model('Jewellery', JewellerySchema);