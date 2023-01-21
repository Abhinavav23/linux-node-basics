const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

app.post('/user', (req, res) => {
     // get the data from req.body
     console.log(req.body);
    // read the file where data to be stored
    const userListData = fs.readFileSync('./data/userList.json');
    const data = JSON.parse(userListData);

    // update the data in the file 
    const userData = {id:data.userList.length+1 ,...req.body}
    data.userList.push(userData)
    console.log(data);

    // write / save the data in json file 
    fs.writeFile('./data/userList.json', JSON.stringify(data, null, 2), (err) => {
        if(err) {
            console.log(err);
        }
        console.log('no error', err);
         // send the the response
        res.send('user created successfully')
    })
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