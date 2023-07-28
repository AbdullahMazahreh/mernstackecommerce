const express = require("express");

const {
  createNewProduct,
  getAllProducts,
  getOneProduct,
  updateOneProduct,
  deleteOneProduct,
} = require("../controllers/adminController");

const router = express.Router();

router.route("/").post(createNewProduct).get(getAllProducts);
router
  .route("/:id")
  .get(getOneProduct)
  .patch(updateOneProduct)
  .delete(deleteOneProduct);

module.exports = router;
