const express = require('express');
const router = express.Router();
const {
  getAllJewellery,
  addJewellery,
} = require('../controllers/jewelleryController');

// GET all jewellery
router.get('/', getAllJewellery);

// POST a new item
router.post('/', addJewellery);

module.exports = router;