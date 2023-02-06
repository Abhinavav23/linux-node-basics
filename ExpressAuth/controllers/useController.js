const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

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

const createToken  = () => {
    
}

const login = async(req, res) => {
    const {email, password} = req.body
    try{
        const userInDB = await User.findOne({email})
        console.log(userInDB);
        const isPasswordMatch = bcrypt.compareSync(password, userInDB.password);
        console.log('result', res);
        // const {email, mobile, _id } = userInDB
        if(isPasswordMatch){
            // you know who is the user
            const secretKey = "NewTonSchoolLinux2022"
            const token = jwt.sign({
                email: userInDB.email, 
                mobile: userInDB.mobile
            }, secretKey);
            console.log('token', token);
            res.send('user logged in successfully')
        } else{
            res.send('sorry wrong password!!')
        }
    } catch(err){
        res.json({Error: err.message})
    }
};



module.exports = { signup, login };
