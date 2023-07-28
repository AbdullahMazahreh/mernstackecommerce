const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/usersController");
const { protect } = require("../middlewares/authMiddlewares");
router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);
module.exports = router;
