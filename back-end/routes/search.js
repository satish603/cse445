const express = require("express");
const router = express.Router();
const Products = require('../models/product');
const { body, validationResult } = require('express-validator');

// Route to get search product with given name and stock greater than 0
router.get('/search', async (req, res) => {
    try {
        const data = await Products.find({ stock: { $gt: 0 } , name: req.query.name});
        res.json(data);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Error in fetching products");
    }
})

module.exports = router;
