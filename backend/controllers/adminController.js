const Product = require("../models/ProductModel");

exports.createNewProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        newProduct: newProduct,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((ele) => delete queryObj[ele]);
    const vendorId = req.query.vendor;
    const allProducts = await Product.find({ vendor: vendorId }).populate(
      "_id"
    );
    res.status(200).json({
      status: "success",
      data: {
        allProducts: allProducts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getOneProduct = async (req, res) => {
  try {
    const product = await Product.find({ _id: req.query.id });
    res.status(200).json({
      status: "success",
      data: {
        product: product,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateOneProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.query.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      status: "success",
      data: {
        updatedProduct: updatedProduct,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteOneProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.deleteOne(req.query.id);
    res.status(200).json({
      status: "success",
      data: {
        deletedProduct: deletedProduct,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
