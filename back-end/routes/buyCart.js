const express = require('express');
const router = express.Router();
const User = require('../models/user'); // import UserModel from user model file
const Product = require('../models/product'); // import Product from product model file
const authmiddleware = require('../middleware/authmiddleware');

// Route to buy all items in the cart
router.post('/buyall', authmiddleware, async (req, res) => {
  try {
    const buyer = await User.findById(req.user.id); // get buyer user object

    const buyRequestToOwner = [];
    const productHistory = [];

    for (const item of buyer.cart) {
      const { productId, quantity } = item;

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

        // Add the purchase request to the buyer's buyrequest
        buyRequestToOwner.push({
          productId,
          name: product.name,
          imageUrl: product.imageUrl,
          category: product.category,
          description: product.description,
          quantity,
          buyer_name: buyer.name,
          buyer_email: buyer.email,
          buyer_phone: buyer.phone,
          buyer_regNo: buyer.regNo,
          buyer: buyer._id, // reference to buyer object
          seller: product.ownerId, // reference to seller object
        });

        // Add the sale request to the seller's sellrequest
        productHistory.push({
          productId,
          quantity,
          buyer: buyer._id, // reference to buyer object
          name: product.name,
          imageUrl: product.imageUrl,
          category: product.category,
          description: product.description,
          seller: product.ownerId, // reference to seller object
        });

      } catch (error) {
        console.error(error.message);
        return res.status(500).send('Server error');
      }
    }

    // Update the buyer's buyrequest array with all purchased items and delete the cart
    for(const sellRequest of productHistory) {
      const updatedBuyer = await User.findByIdAndUpdate(
        sellRequest.buyer,
        { $push: { productHistory: sellRequest } },
        { new: true }
      );
    }

    // Update the sellers' sellrequest arrays with all sold items
    for (const buyRequest of buyRequestToOwner) {
      const updatedSeller = await User.findByIdAndUpdate(
        buyRequest.seller,
        { $push: { buyRequestToOwner: buyRequest } },
        { new: true }
      );
    }

    res.json({ message: 'All products purchased successfully' });

  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});


module.exports = router;
