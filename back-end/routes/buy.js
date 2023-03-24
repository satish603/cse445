const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const authmiddleware = require('../middleware/authmiddleware');
const User = require('../models/User');
const Product = require('../models/Product');

// Route to buy a product
router.post('/buy', authmiddleware, [
  body('productId').isString().notEmpty(),
  body('quantity').isInt({ min: 1 }),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { productId, quantity } = req.body;

  try {
    // Find the product by ID
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Check if there is enough stock
    if (product.stock < quantity) {
      return res.status(400).json({ error: 'Insufficient stock' });
    }

    // Deduct the purchased quantity from the product stock
    product.stock -= quantity;
    await product.save();

    // Add the product to the user's cart
    const user = await User.findById(req.user.id);
    user.cart.push({
      productId,
      quantity,
    });
    await user.save();

    // Add the purchase request to the user's buyrequest
    user.buyrequest.push({
      productId,
      quantity,
    });
    await user.save();

    res.json({ message: 'Product purchased successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
