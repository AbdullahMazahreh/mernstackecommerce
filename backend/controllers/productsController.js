const Product = require("../models/ProductModel");

exports.getAllProducts = async (req, res) => {
  const queryObj = { ...req.query };
  const excludedFields = ["page", "sort", "limit", "fields"];
  excludedFields.forEach((ele) => delete queryObj[ele]);
  console.log(queryObj);
  try {
    const products = await Product.find();
    res.status(200).json({
      status: "success",
      data: {
        products: products,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
