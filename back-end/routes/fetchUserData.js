const express = require("express");
const router = express.Router();
const UserModel = require("../models/user");
const { body, validationResult } = require("express-validator");
const authmiddle = require("../middleware/authmiddleware");

// Fetch cart data for a specific user
router.get('/cart', authmiddle, (req, res) => {
  UserModel.findById(req.user.id)
    .then(user => {
      const cart = user.cart;
      res.json(cart);
    }) 
    .catch(err => {
      console.error(err.message);
      res.status(500).send('Server Error');
    });
});

// Fetch buyRequestToOwner data for a specific user
router.get('/buyRequestToOwner', authmiddle, (req, res) => {
  UserModel.findById(req.user.id)
    .then(user => {
      const buyRequestToOwner = user.buyRequestToOwner;
      res.json(buyRequestToOwner);
    }) 
    .catch(err => {
      console.error(err.message);
      res.status(500).send('Server Error');
    });
});

// Fetch productHistory data for a specific user
router.get('/productHistory', authmiddle, (req, res) => {
  UserModel.findById(req.user.id)
    .then(user => {
      const productHistory = user.productHistory;
      res.json(productHistory);
    }) 
    .catch(err => {
      console.error(err.message);
      res.status(500).send('Server Error');
    });
});

module.exports = router;
