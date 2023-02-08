const User = require("../models/userModel");
const jwt = require('jsonwebtoken');

const authUser = async (req, res, next) => {
  const { authorization } = req.headers;
  // if authorization exists then move else return unauthorized
  if (authorization) {
    const data = authorization.split(" ");
    const token = data[1];
    try {
      const userInfo = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(userInfo.userId);
      console.log('user', user);
      req.user = user;
      next();
    } catch (err) {
        console.log('error occureed -----> ');
      res.send({ Error: err });
    }
  } else {
    console.log('error occureed -----> ');
    res.status(401).send("User is not authorized");
  }
};

module.exports = { authUser };
