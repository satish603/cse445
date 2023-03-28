const express = require("express");
const router = express.Router();
const Products = require("../models/product");
const { body, validationResult } = require("express-validator");
const authmiddle = require("../middleware/authmiddleware");
const multer = require("multer");
const path = require("path");

// Set storage engine for multer
const storage = multer.diskStorage({
  destination: "./public/images",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Initialize upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 3000000 }, // 3MB limit
  fileFilter: function (req, file, cb) {
    // Allow only image files
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Only image files are allowed!"));
    }
    cb(null, true);
  },
}).single("image");

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
    //Throw error if there is problem in validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Upload image and handle errors
    upload(req, res, async (err) => {
      if (err) {
        console.error(err.message);
        return res.status(400).json({ msg: err.message });
      }

      try {
        const { name, description, category, stock } = req.body;
        const product = new Products({
          name,
          description,
          stock,
          category,
          user: req.user.id,
          imageUrl: req.file ? req.file.path : "",
        });
        const saveProduct = await product.save();
        res.json(saveProduct);
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Problem while adding product");
      }
    });
  }
);

module.exports = router;
