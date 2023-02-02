const { find } = require("../models/userModel");
const User = require("../models/userModel");

const signup = (req, res) => {
  // get value from req.body
  const { username, email, password, role, mobile } = req.body;
  // created a new user using mongoose model
  const newUser = new User({ username, email, password, role, mobile });
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
      res.send("created");
    })
    .catch((err) => {
      console.log(err);
    });
  // insertMany([{}, {}, {}])
};

const login = (req, res) => {
  res.send("signup successful");
};

const getProfile = (req, res) => {
  res.send("profile");
};

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

  User.find({ $or: [{ score: 40 }, { batch: "macos" }] })
    .select({ username: 1, score: 1, batch: 1 })
    .then((count) => {
      res.send(count);
    })
    .catch((err) => {
      res.send("error occured !");
    });
};

const updateUser = (req, res) => {
  // returns the user which is updated
  // User.findByIdAndUpdate(req.params.id, {$set: req.body})
  // .then((user) => {
  //     console.log(user);
  //     res.send('user updated successfully')
  // })

  // returns information after update
  // upsert means create a doc if not found
  // User.updateOne({email: req.params.email}, req.body, {upsert: true})
  // .then((data) => {
  //     console.log(data);
  //     res.send('user updated successfully!!')
  // })
  // .catch((err) => {
  //     res.send(err.message)
  // })

  // User.updateOne({email: req.params.email}, req.body, {upsert: true})
  // .then((data) => {
  //     console.log(data);
  //     res.send('user updated successfully!!')
  // })

  // User.updateMany({batch: "linux"}, req.body)
  // .then((data) => {
  //     console.log(data);
  //     res.send('updated successfully')
  // })

  // {new: true} is used to get the updated data in promise response
  User.findOneAndUpdate(
    { username: "user5555" },
    { username: "user5" },
    { new: true }
  ).then((user) => {
    console.log(user);
    res.send("updated");
  });
};

const deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id).then((user) => {
    console.log(user);
    res.send("deleted user");
  });
};

const deleteUserV2 = (req, res) => {
    console.log('delte many');
    User.deleteMany({email: "use9r@mail11"})
    .then((data) => {
        console.log(data);
        res.send('deleted')
    })
};

const getUserPaginated = (req, res) => {
    const {page, limit} = req.query
    if(page>0){
        User.find().skip((page-1)*5).limit(limit)
        .then((user) => {
        console.log(user);
        res.send(user)
    })
    }else{
        res.send()
    }
}

const getUserPaginatedV2 = (req, res) => {
    User.paginate({}, {page: 2, limit: 3})
    .then((response) => {
        console.log(response);
        res.send('pagination')
    })
}


module.exports = {
  signup,
  login,
  getProfile,
  getUsers,
  updateUser,
  deleteUser,
  deleteUserV2,
  getUserPaginated,
  getUserPaginatedV2
};
