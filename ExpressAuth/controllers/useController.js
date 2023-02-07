const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = (req, res) => {
  const { firstName, lastName, password, email, mobile, batch } = req.body;

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
  })
    .then((user) => {
      console.log(user);
      res.status(201).send("user created successfully");
    })
    .catch((err) => {
      res.json({ error: err.message });
    });
};

const createToken = () => {};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userInDB = await User.findOne({ email });
    console.log(userInDB);
    const isPasswordMatch = bcrypt.compareSync(password, userInDB.password);
    console.log("result", res);
    // const {email, mobile, _id } = userInDB
    if (isPasswordMatch) {
      // you know who is the user
     
      const token = jwt.sign(
        {
          email: userInDB.email,
          mobile: userInDB.mobile,
        },
        process.env.JWT_SECRET
      );
      console.log("token", token);
      // send the token in cookie
      // res.cookie("token", token)

      // res.setHeader("authorization", token)
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
  const { authorization } = req.headers;
  console.log('authorization', authorization);
  if(authorization){
    const data = authorization.split(" ");
    const token = data[1]
    try{
        const userInfo = jwt.verify(token, secretKey);
        const user = await User.findOne({email: userInfo.email }).select({batch: 1})
        console.log(user);
        res.json({batchName: user.batch});
    }catch(err){
        res.send({Error: err})
    }
  }else{
    res.status(401).send("User is not authorized")
  }

};

const getProfile  = (req, res) => {

}

const logout = () => {

}

module.exports = { signup, login, getBatchInfo, getProfile };



