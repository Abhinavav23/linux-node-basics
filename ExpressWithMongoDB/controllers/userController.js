const { find } = require('../models/userModel')
const User = require('../models/userModel')

const signup = (req, res) => {

    // get value from req.body
    const {username, email, password, role, mobile}= req.body
    // created a new user using mongoose model
    const newUser = new User({username, email, password, role, mobile})
    // saving the user in the database by calling save method on
    // newly created user
    // save method returns a promise and handled below
    // newUser.save()

    // User.create(req.body)
    // .then((user) => {
    //     console.log('user after save', user);
    //     res.send('signup successful and saved data !')
    // })
    // .catch((err) => {
    //     console.log(err);
    //     res.send('something went wrong !!')
    // })


    // create multiple documents in one go
    User.insertMany(req.body)
    .then((data) => {
        console.log(data);
        res.send('created')
    })
    .catch((err) => {
        console.log(err);
    })
    // insertMany([{}, {}, {}])
}



const login = (req, res) => {
    res.send('signup successful')
}

const getProfile = (req, res) => {
    res.send('profile')
}

const getUsers = (req, res) => {
    // User.find()
    // .then((users) => {
    //     res.send(users)
    // })
    // .catch((err) => {
    //     res.send('error occured !')
    // })

    // User.find({username: 'user3'})
    // .then((users) => {
    //     res.send(users)
    // })
    // .catch((err) => {
    //     res.send('error occured !')
    // })

    // User.find({batch: 'linux', role: "instructor"})
    // .then((users) => {
    //     res.send(users)
    // })
    // .catch((err) => {
    //     res.send('error occured !')
    // })


    // User.find({role: "student"}).select(['-email', 'username'])
    // User.find({role: "student"}).select('email username')
    // User.find({role: "student"}).select({username: 0, email:0})
    // .then((users) => {
    //     res.send(users)
    // })
    // .catch((err) => {
    //     res.send('error occured !')
    // })


    // to find single user

    // User.findOne({role: "student", batch: "macos"})
    // // .select({role: 1, batch: 1})
    // .then((user) => {
    //     res.send(user)
    // })

    // User.findById('63da9355a0c7c8307a853fa1')
    // .then((user) => {
    //     res.send(user)
    // })


    // User.find({role: "student"}).select({username: 1, email:1}).limit(5)
    // // User.find({role: "student"},{username: 1, email:1}, {limit:2})
    // .then((users) => {
    //     res.send(users)
    // })
    // .catch((err) => {
    //     res.send('error occured !')
    // })

    // User.find({role: "student"}).select({username: 1, email:1}).skip(3)
    // // User.find({role: "student"},{username: 1, email:1}, {limit:2})
    // .then((users) => {
    //     res.send(users)
    // })
    // .catch((err) => {
    //     res.send('error occured !')
    // })

    // User.find({role: "student", batch: 'linux'}).count()
    // User.find().countDocuments()
    // .then((count) => {
    //     // res.send(count)
    //     res.send({count})
    // })
    // .catch((err) => {
    //     res.send('error occured !')
    // })



    // User.find({score: { $gt: 50 }}).select({username: 1, score: 1})
    // .then((count) => {
    //     res.send(count)
    // })
    // .catch((err) => {
    //     res.send('error occured !')
    // })

    // >, >=, <, <=
    // User.find({score: { $gte: 50 }}).select({username: 1, score: 1})
    // .then((count) => {
    //     res.send(count)
    // })
    // .catch((err) => {
    //     res.send('error occured !')
    // })

    // should be 40 or 60
    // User.find({score: { $in: [70, 40] }}).select({username: 1, score: 1})
    // .then((count) => {
    //     res.send(count)
    // })
    // .catch((err) => {
    //     res.send('error occured !')
    // })

    // should not be 40 or 60
    // User.find({score: { $nin: [70, 40] }}).select({username: 1, score: 1})
    // .then((count) => {
    //     res.send(count)
    // })
    // .catch((err) => {
    //     res.send('error occured !')
    // })

     // should not be 70
    //  User.find({score: { $ne: 70 }}).select({username: 1, score: 1})
    //  .then((count) => {
    //      res.send(count)
    //  })
    //  .catch((err) => {
    //      res.send('error occured !')
    //  })


    //  Q give me the email for first 10 users who have score more than 50
    //  - Read
    //  - find
    //   - select
    //    - {score : {$gt: 50}}
    //  - limit

    // and, or, nor, not

    // and --> should satisfy both condition
    // User.find({$and: [{score: 40}, {batch: "macos"}]}).select({username: 1, score: 1, batch: 1})
    // .then((count) => {
    //     res.send(count)
    // })
    // .catch((err) => {
    //     res.send('error occured !')
    // })

    User.find({$or: [{score: 40}, {batch: "macos"}]})
    .select({username: 1, score: 1, batch: 1})
    .then((count) => {
        res.send(count)
    })
    .catch((err) => {
        res.send('error occured !')
    })


}

module.exports = {signup, login, getProfile, getUsers}