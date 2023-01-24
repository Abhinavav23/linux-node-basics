const express = require('express');

const router = express.Router();

const userList = [
    {
        id: '1',
        name: 'Abhinav'
    },
    {
        id: '2',
        name: 'Virat'
    }
]

router.get('/user', (req, res) => {
    console.log(req.query);
    res.send({userList})
})

router.post('/user', (req, res) => {
    console.log(req.body);
    userList.push(req.body);
    res.send(userList)
})


module.exports = router


// let obj = {

// }

// obj.name = 'abhinav'
// obj.add = 'india'