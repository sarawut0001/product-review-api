const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProducts,
  getProductWithReview,
} = require("../controllers/product");
const { authCheck, adminCheck } = require("../middleware/authCheck");

router.post("/product", authCheck, adminCheck, createProduct);
router.get("/products", getProducts);
router.get("/product/:id", getProductWithReview);

module.exports = router;
