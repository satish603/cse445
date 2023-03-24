const express = require("express");
const router = express.Router();
const Products = require("../models/product");
const { body, validationResult } = require("express-validator");
const authmiddle = require("../middleware/authmiddleware");

//Route 2: To add a Product
router.post(
  "/addproduct",
  authmiddle,
  [
    body("name", "Name must be 3 chars").isLength({ min: 3 }),
    body("description", "description can not be empty").exists(),
    body("category", "category can not be empty").exists(),
    body("count", "count must be an integer greater than 0").isInt({ min: 1 }),
  ],
  async (req, res) => {
    //Throw error if there is problem in validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, description, category, count } = req.body;
      const product = new Products({
        name,
        description,
        count,
        category,
        user: req.user.id,
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
