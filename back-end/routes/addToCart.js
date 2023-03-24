const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const authmiddleware = require('../middleware/authmiddleware');
const User = require('../models/User');
const Product = require('../models/Product');

// Route to add a product to the cart
router.post('/cart', authmiddleware, [
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

    // Add the product to the user's cart
    const user = await User.findById(req.user.id);
    const existingCartItemIndex = user.cart.findIndex(item => item.productId === productId);
    if (existingCartItemIndex !== -1) {
      // If the product already exists in the cart, update the quantity
      user.cart[existingCartItemIndex].quantity += quantity;
    } else {
      // If the product is not already in the cart, add it
      user.cart.push({
        productId,
        quantity,
      });
    }
    await user.save();

    res.json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
