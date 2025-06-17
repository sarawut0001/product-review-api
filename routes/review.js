const express = require("express");
const router = express.Router();
const { createReview } = require("../controllers/review");
const { authCheck } = require("../middleware/authCheck");

router.post("/review/:id", authCheck, createReview);

module.exports = router;
