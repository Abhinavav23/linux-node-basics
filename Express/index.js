const express = require('express');
// console.log(express);
const app = express();

app.use(express.json())

/*
app.get('/', (req, res) => {
    // console.log(req.headers);
    // console.log(req.path);
    // text/html
    res.send('Hi this is my server');
})

app.get('/about', (req, res) => {
    // console.log(req.path);
    // console.log('hostname', req.hostname);
    // console.log('ip',req.ip);
    // console.log('protocol', req.protocol);

    console.log('params', req.params);
    console.log('query', req.query);
    console.log('body', req.body);

    res.send('<h2>About Page</h2>');
    // res.end('<h2>About Page</h2>');
})

app.get('/data', (req, res) => {
    res.type('application/json')
    res.send({name: [1,2,3]})
})

const personListIndia = []
const personListUS = []


app.get('/personInfo/:personid/:region', (req, res) => {
    console.log('params', req.params);
    res.send('This is person Info ');
})
*/

const productsList = [
    {
        id: '1',
        type: 'Clothing',
        name: 'Shirt'
    },
    {
        id: '2',
        type: 'accessories',
        name: 'cover'
    },
    {
        id: '3',
        type: 'Electronic',
        name: 'Mobile'
    }
]

app.get('/products', (req, res) => {
    console.log(req.query);
    res.send({productsList})
})

app.get('/', (req, res) => {
    res.send('<h1>Default Page</h1>')
})

app.get('/products/:id', (req, res) => {
    // req.params wil be an object 
    console.log(req.params);
    const product = productsList.find((product) => product.id === req.params.id);
    if(product){
        res.send(product)
    } else{
        res.send('Product not found!!');
    }
    console.log(product);
})

// we can send the data in body
app.post('/products', (req, res) => {
    console.log('post req received');
    console.log(req.body);
    productsList.push(req.body)
    res.send(productsList)
})

// use to update the data 
// which  element to update ---> through params
// what to update ---> through body
// we replace the whole content, hence you have to pass everything which has to be updated
// if no element found put then will created an item
app.put('/products/:id', (req, res) => {
    console.log(req.params.id);
    // const productToBeUpdated = productsList.find((product) => product.id === req.params.id);

    productsList.forEach((product, i) => {
        if(product.id === req.params.id){
            productsList[i] = req.body
        }
    })
    res.send(productsList)
})

// patch is also used to update the value
// but we update whatever is needed
// if no element found then will throw error

app.patch('/products/:id', (req, res) => {
    // patch code

})

app.delete('/products/:id', () => {
    // find the product and delete it
})


// [1,2,3,4,5]
// ---> 2nd index
// --->



// default route
app.get('*', (req, res) => {
    res.send('<h3>404 Path not found !!</h3>')
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


// fetch('http://flipkart.com', {
//     method: 'POST'
// })