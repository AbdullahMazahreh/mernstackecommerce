const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser,
  getMe,
  getAllUsers,
  editOneUser,
  getOneUser,
} = require("../controllers/usersController");
const { protect } = require("../middlewares/authMiddlewares");
router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);
router.route("/allusers").get(getAllUsers);
router.route("/updateuser").patch(editOneUser);
router.route("/oneuser").get(getOneUser);
module.exports = router;
