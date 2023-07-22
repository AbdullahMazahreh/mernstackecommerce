const express = require("express");

const { createNewProduct } = require("../controllers/adminController");

const router = express.Router();

router.route("/").post(createNewProduct);

module.exports = router;
