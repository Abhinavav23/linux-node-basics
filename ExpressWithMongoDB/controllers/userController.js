const User = require('../models/userModel')

const signup = (req, res) => {
    console.log(req.body);
    const {username, email, password, role, mobile}= req.body
    const newUser = new User({username, email, password, role, mobile})
    newUser.save()
    .then((user) => {
        console.log(user);
        res.send('signup successful and saved data !')
    })
    .catch((err) => {
        console.log(err);
        res.send('something went wrong !!')
    })
}

const login = (req, res) => {
    res.send('signup successful')
}

const getProfile = (req, res) => {
    res.send('profile')
}

module.exports = {signup, login, getProfile}