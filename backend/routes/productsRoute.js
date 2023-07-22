const express = require("express");

const { getAllProducts } = require("../controllers/productsController");

const router = express.Router();

router.route("/").get(getAllProducts);
router.route("/:id");

module.exports = router;
