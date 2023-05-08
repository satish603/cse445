const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const authmiddleware = require('../middleware/authmiddleware');
const User = require('../models/user');
const Product = require('../models/product');

// Route to buy a product
router.post('/buy', authmiddleware, [
    body('productId','product id not found').isString().notEmpty(),
    body('quantity','quantity less than 1').isInt({ min: 1 }),
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
  
      const buyer = await User.findById(req.user.id);
  
      // Add the purchase request to the buyer's buyrequest
      buyer.buyrequest.push({
        productId,
        "name": product.name,
        "price": product.price,
        "url": product.url,
        "category": product.category,
        "description": product.description,
        quantity,
      });
      await buyer.save();
  
      // Add the sale request to the seller's sellrequest
      const seller = await User.findById(product.user);
      seller.sellrequest.push({
        productId,
        "name": product.name,
        "price": product.price,
        "url": product.url,
        "category": product.category,
        "description": product.description,
        quantity,
          buyer: req.user.id,
      });
      await seller.save();
      
      res.json({ message: 'Product purchased successfully' });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  });
  
module.exports = router;
