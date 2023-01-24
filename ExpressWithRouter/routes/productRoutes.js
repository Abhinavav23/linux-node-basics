const express = require('express');

const router = express.Router();

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
// http://localhost:5800/products/
router.get('/all', (req, res) => {
    console.log(req.query);
    res.send({productsList})
})

router.post('/', (req, res) => {
    console.log(req.body);
    productsList.push(req.body);
    res.send(productsList)
})

router.get('/mobile', (req, res) => {
    res.send('mobiles')
})

// app.route('/products')
// .get((req, res) => {
//     console.log(req.query);
//     res.send({productsList})
// })
// .post((req, res) => {
//     res.send('product added')
// })

module.exports = router