const express = require('express');
const fs = require('fs');

const app = express();
// app.use(express.json());
app.use(express.urlencoded());

/*
app.post('/user', (req, res) => {
     // get the data from req.body
     console.log(req.body);
    // read the file where data to be stored
    const userListData = fs.readFileSync('./data/userList.json');
    const data = JSON.parse(userListData);

    // update the data in the file 
    const userData = {id:data.userList.length+1 ,...req.body}
    data.userList.push(userData)

    // write / save the data in json file 
    fs.writeFile('./data/userList.json', JSON.stringify(data, null, 2), (err) => {
        if(err) {
            console.log(err);
        }
        console.log('no error', err);
         // send the the response
        res.send('user created successfully')
    })
    res.send('completed');
})

app.get('/user', (req, res) => {
    const userListData = fs.readFileSync('./data/userList.json');
    res.send(JSON.parse(userListData));
})

app.put('/user/:id', (req, res) => {
    const userListData = fs.readFileSync('./data/userList.json');
    // to be completed
})

app.delete('/user/:id', (req, res) => {
    // to be completed
})
*/

// will check if user is logged in

const userList = [
    {
        username: 'Abhinav',
        password: '12345',
    },
    {
        username: 'Virat',
        password: '123'
    },
    {
        username: 'Rohit',
        password: '12309'
    }
]

const friendList = ['Abhinav', 'Friend1', 'friend2']

const checkUsername = (req, res, next) => {
    const {username, password} = req.body
    console.log(req.body);
    const user = userList.find((user) => user.username === username);
    if(user){
        if(user.password === password){
            next()
        } else{

            res.send('password did not match !!')
        }
    }else{
        res.send('User not found')
    }
}

// const checkPassword = (req, res, next) => {
//     const {username, password} = req.body
//     console.log(req.body);
//     const user = userList.find((user) => user.password === password);
//     if(user){
//         next()
//     }else{
//         res.send('password did not match')
//     }
// }

const logResults = (req, res, next) => {
    const {username} = req.body
   fs.appendFile('./userLogs.txt',`\n${username} has logged in successfully`,(err) => {
        if(err) console.log(err);
        
    }) 
    next();
}

// default --> runs for all the routes
// app.use(checkLogin);
// app.use(logResults)

// const friendsHandler = (req, res) => {
//     console.log('inside friends callback');
//     res.send('middleware running')
// }

app.post('/friends',checkUsername,logResults, (req, res) => {
    console.log('inside friends callback');
    res.send(friendList)
})

app.post('/login', (req, res) => {
    console.log(req.body);
    res.send('Logged in successfully')
})

// app.post('/messages',checkUsername, (req, res) => {
//     console.log('inside messages callback');
//     res.send('reading messages')
// })

// app.get('/publicpage', (req, res) => {
//     res.send('public page')
// })




const PORT = 5050
app.listen(PORT, () => {
    console.log(`user service is running at port ${PORT}`);
})

// data ---> update data

// const data = {}
// fetch('http://localhost:5050/user', {
//     method: 'POST',
//     body: {
//         json
//     }
// })

// axios.post('http://localhost:5050/user', data)