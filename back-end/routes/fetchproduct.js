const express = require("express");
const router = express.Router();
const Products = require('../models/product');
const { body, validationResult } = require('express-validator');

// Route to get products with stock greater than 0 and Category: Electronic
router.get('/getproduct/electronic', async (req, res) => {
    try {
        const data = await Products.find({ stock: { $gt: 0 }, category: "Electronic"});
        res.json(data);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Error in fetching products");
    }
})
// Route to get products with stock greater than 0 and Category: Stationary
router.get('/getproduct/stationary', async (req, res) => {
    try {
        const data = await Products.find({ stock: { $gt: 0 }, category: "Stationary"});
        res.json(data);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Error in fetching products");
    }
})
// Route to get products with stock greater than 0 and Category: Utilities
router.get('/getproduct/utilities', async (req, res) => {
    try {
        const data = await Products.find({ stock: { $gt: 0 }, category: "Utilities"});
        res.json(data);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Error in fetching products");
    }
})
// Route to get products with stock greater than 0 and Category: Beding
router.get('/getproduct/bedings', async (req, res) => {
    try {
        const data = await Products.find({ stock: { $gt: 0 }, category: "Bedings"});
        res.json(data);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Error in fetching products");
    }
})
// Route to get products with stock greater than 0 and Category: Tools
router.get('/getproduct/tools', async (req, res) => {
    try {
        const data = await Products.find({ stock: { $gt: 0 }, category: "Tools"});
        res.json(data);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Error in fetching products");
    }
})
// Route to get products with stock greater than 0 and Category: Others
router.get('/getproduct/others', async (req, res) => {
    try {
        const data = await Products.find({ stock: { $gt: 0 }, category: "Others"});
        res.json(data);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Error in fetching products");
    }
})


module.exports = router;
