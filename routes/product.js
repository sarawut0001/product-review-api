const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProducts,
  getProductWithReview,
  update,
  remove,
} = require("../controllers/product");
const { authCheck, adminCheck } = require("../middleware/authCheck");

router.post("/product", authCheck, adminCheck, createProduct);
router.get("/products", getProducts);
router.get("/product/:id", getProductWithReview);
router.put("/product/:id", authCheck, adminCheck, update);
router.delete("/product/:id", authCheck, adminCheck, remove);

module.exports = router;
