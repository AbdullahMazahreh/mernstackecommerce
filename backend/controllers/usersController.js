const jwb = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");

//@Register new User
//@Route: Post/api/users
//@Access: Pubic
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json({
      allusers: allUsers,
    });
  } catch (err) {
    res.status(400);
  }
};

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please fill all feilds");
  }
  //check if user exist
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already Exist");
  }

  //Hash passowrd
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Create user
  const user = await User.create({ ...req.body, password: hashedPassword });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@Authenticate a user
//@Route: Post/api/login
//@Access: Pubic
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //Check for user email
  const user = await User.findOne({ email });

  // Compare the provided password with the stored hashed password

  if (user && (await bcrypt.compare(password, user.password))) {
    // Successful login, send a response with the user details

    res.json({
      id: user._id,
      name: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentails");
  }
});
//@Get User data
//@Route: Get/api/users/me
//@Access: Private

const getMe = asyncHandler(async (req, res) => {
  const { _id, username, email } = await User.findById(req.user.id);

  res.status(200).json({
    id: _id,
    name: username,
    email: email,
  });
});

//Generate JWT
const generateToken = (id) => {
  return jwb.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = { registerUser, loginUser, getMe, getAllUsers };
