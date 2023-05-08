const express = require('express');
const router = express.Router();
const User = require('../models/user'); // import UserModel from user model file
const Product = require('../models/product'); // import Product from product model file
const authmiddleware = require('../middleware/authmiddleware');


// Route to buy all items in the cart
router.post('/buyall', authmiddleware, async (req, res) => {
    const { cart } = await User.findById(req.user.id);
    const details = await User.findById(req.user.id);
    console.log(details);
    const buyRequestToOwner = [];
    const productHistory = [];
  
    for (const item of cart) {
      const { productId, quantity } = item;
      
      try {
        // Find the product by ID
        const product = await Product.findById(productId);
        // const user= await User.findById(req.body.Id);
        // console.log(user);
        // console.log(productId);
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
  
        // Add the purchase request to the buyer's buyrequest
        buyRequestToOwner.push({
          productId,
        "name": product.name,
        "imageUrl": product.imageUrl,
        "category": product.category,
        "description": product.description,
        quantity,
        "buyer_name": details.name,
        "buyer_email": details.email,
        "buyer_phone": details.phone,
        "buyer_regNo": details.regNo,
        });
  
        // Add the sale request to the seller's sellrequest
        const seller = await User.findById(product.user);
        productHistory.push({
          productId,
          quantity,
          buyer: req.user.id,
          "name": product.name,
          "imageUrl": product.imageUrl,
          "category": product.category,
          "description": product.description,
        });
      } catch (error) {
        console.error(error.message);
        return res.status(500).send('Server error');
      }
    }
  
    try {
      // Update the buyer's buyrequest array with all purchased items
      const buyer = await User.findByIdAndUpdate(
        req.user.id,
        { $push: { buyrequest: { $each: buyRequestToOwner } }, $set: { cart: [] } },
        { new: true }
      );
  
      // Update the sellers' sellrequest arrays with all sold items
      for (const sellRequest of productHistory) {
        const seller = await User.findByIdAndUpdate(
          sellRequest.buyer,
          { $push: { sellrequest: sellRequest } },
          { new: true }
        );
      }
  
      res.json({ message: 'All products purchased successfully' });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }

    // Delete the entire cart data
  try {
    const buyer = await User.findByIdAndUpdate(
      req.user.id,
      { $set: { cart: [] } },
      { new: true }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }



  });

module.exports = router;