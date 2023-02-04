const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const signup = (req, res) => {
  const { firstName, lastName, password, email, mobile, batch } = req.body;

  const salt = bcrypt.genSaltSync(10);
  const securedPassword = bcrypt.hashSync(password, salt);
  console.log('secured', securedPassword);

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

const login = (req, res) => {
  res.send("login  success");
};

module.exports = { signup, login };
