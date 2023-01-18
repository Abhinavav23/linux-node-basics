const express = require('express');
// console.log(express);
const app = express();

app.get('/', (req, res) => {
    res.send('Hi this is my server');
})

app.get('/about', (req, res) => {
    res.send('<h2>About Page</h2>');
    // res.end('<h2>About Page</h2>');
})

app.get('/data', (req, res) => {
    res.type('application/json')
    res.send({name: [1,2,3]})
})

const PORT = 4050
app.listen(PORT, () => {
    // if(err) {
    //     console.log(`Error Occurred: ${err.message}`);
    //     return
    // }
    console.log(`app started on port ${PORT}`);
})






// function test(){
//     return {get: 'test'}
// }

// const a  = test()
// a.get