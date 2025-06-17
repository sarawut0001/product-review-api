const express = require("express");
const { register, login, getCurrentUser } = require("../controllers/auth");
const { authCheck } = require("../middleware/authCheck");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/current-user", authCheck, getCurrentUser);

module.exports = router;
