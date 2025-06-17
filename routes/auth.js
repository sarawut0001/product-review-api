const express = require("express");
const { register, login, getCurrentUser } = require("../controllers/auth");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/current-user", getCurrentUser);

module.exports = router;
