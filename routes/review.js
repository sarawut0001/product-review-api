const express = require("express");
const router = express.Router();
const { createReview, getUserReviews } = require("../controllers/review");
const { authCheck } = require("../middleware/authCheck");

router.post("/review/:id", authCheck, createReview);
router.get("/user/:id/reviews", authCheck, getUserReviews);

module.exports = router;
