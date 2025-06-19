const express = require("express");
const router = express.Router();
const {
  createReview,
  getUserReviews,
  updateReview,
  removeReview,
} = require("../controllers/review");
const { authCheck } = require("../middleware/authCheck");

router.post("/product/:id/review/", authCheck, createReview);
router.put("/product/:productId/review/:id", updateReview);
router.delete("/product/:productId/review/:id", removeReview);
router.get("/user/:id/reviews", authCheck, getUserReviews);

module.exports = router;
