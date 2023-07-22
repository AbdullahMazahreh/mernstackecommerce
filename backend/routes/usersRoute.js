const express = require("express");

const {
  createNewUser,
  findOneUser,
} = require("../controllers/usersController");

const router = express.Router();

router.route("/").post(createNewUser).get(findOneUser);
router.route("/:id");

module.exports = router;
