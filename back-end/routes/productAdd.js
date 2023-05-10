const express = require("express");
const router = express.Router();
const Products = require("../models/product");
const { body, validationResult } = require("express-validator");
const authmiddle = require("../middleware/authmiddleware");
// const multer = require("multer");
const path = require("path");

// Route to add a product
router.post(
  "/addproduct",
  authmiddle,
  [
    body("name", "Name must be 3 chars").isLength({ min: 3 }),
    body("description", "description can not be empty").exists(),
    body("category", "category can not be empty").exists(),
    body("stock", "stock must be an integer greater than 0").isInt({ min: 1 }),
  ],
  async (req, res) => {
    // Throw error if there is problem in validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
      try {
        const { name, description, category, stock, image } = req.body;
        const product = new Products({
          name,
          description,
          stock,
          category,
          ownerId: req.user.id,
          imageUrl: image,
        });
        const saveProduct = await product.save();
        res.json(saveProduct);
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Problem while adding product");
      }
  }
);

module.exports = router;
