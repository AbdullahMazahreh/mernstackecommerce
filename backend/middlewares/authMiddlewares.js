const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { User } = require("../models/UserModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    //check autherization header
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
    //token starts with (Bearer jhdithritrit.kjgirej.ksjhtierht)
  ) {
    try {
      //Get token from header
      token = req.headers.authorization.split(" ")[1]; //to get token just without the bearer

      //verify th token:
      // Replace with your actual JWT secret key
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find the user document based on the decoded ID and exclude the password field

      req.user = await User.findById(decoded.id).select("-password");
      // .select("-password"): The select method in Mongoose is used to specify which fields to include or exclude from the query result.
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized , No token");
  }
});
module.exports = { protect };
