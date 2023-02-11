const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = (req, res) => {
  const { firstName, lastName, password, email, mobile, batch, role } =
    req.body;

  const salt = bcrypt.genSaltSync(10);
  const securedPassword = bcrypt.hashSync(password, salt);
  console.log("secured", securedPassword);

  User.create({
    firstName,
    lastName,
    password: securedPassword,
    email,
    mobile,
    batch,
    role,
  })
    .then((user) => {
      console.log(user);
      res.status(201).send("user created successfully");
    })
    .catch((err) => {
      res.json({ error: err.message });
    });
};

const createToken = (userDetails) => {
  const token = jwt.sign(userDetails, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userInDB = await User.findOne({ email });
    // console.log(userInDB);
    const isPasswordMatch = bcrypt.compareSync(password, userInDB.password);
    // const {email, mobile, _id } = userInDB
    if (isPasswordMatch) {
      // you know who is the user

      console.log("userInDB", userInDB);
      const token = createToken({ userId: userInDB._id });
      // console.log("token", token);
      // send the token in cookie
      // res.cookie("token", token)
      // res.setHeader("authorization", token)

      console.log("token", token);
      // save the token in DB
      const updatedTokenArr = [...userInDB.tokens, token];

      // code here and complete this

      await User.updateOne(
        { email: userInDB.email },
        { tokens: updatedTokenArr }
      );
      res.json({
        message: "logged in successfully",
        token,
      });
    } else {
      res.send("sorry wrong password!!");
    }
  } catch (err) {
    res.json({ Error: err.message });
  }
};

const getBatchInfo = async (req, res) => {
  // console.log(req.headers);
  console.log("user in getBatchInfo", req.user);
  res.json({ name: req.user.firstName, batchName: req.user.batch });
};

const getProfile = (req, res) => {};

const logoutUser = async (req, res) => {
  const { authorization } = req.headers;
  const data = authorization.split(" ");
  const token = data[1];
  try {
    const userInfo = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(userInfo.userId);
    const filteredTokens = user.tokens.filter((to) => {
      return to !== token;
    });

    await User.updateOne({ _id: userInfo.userId }, { tokens: filteredTokens });
    res.send("logged out successfully");
  } catch (e) {
    res.json({ Error: e.message });
  }
};

const getAllUsers = async (req, res) => {
  const { role } = req.user;
  if (role) {
    if (role === "admin") {
      const users = await User.find();
      res.send(users);
    } else {
      res.send("you dont have rights to view ");
    }
  } else {
    res.send("you dont have role ");
  }
};

module.exports = {
  signup,
  login,
  getBatchInfo,
  getProfile,
  logoutUser,
  getAllUsers,
};
