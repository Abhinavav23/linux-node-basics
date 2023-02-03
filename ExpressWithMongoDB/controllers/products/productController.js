const Product = require("../../models/product/productModel")

const createProduct = (req, res) => {

    
    Product.create(req.body)
    .then((prod) => {
        console.log(prod);
        res.send('created product')
    })
    .catch((err) => {
        console.log(err);
        res.send('something went wrong!')
    })
}

module.exports = {
    createProduct
}