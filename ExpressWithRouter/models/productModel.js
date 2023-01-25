const fs = require('fs')

const saveProduct = (product) => {
    const data = fs.readFileSync('./data/products.json');
    const products = JSON.parse(data);
    products.productList.push({id: products.productList.length+1, ...product});

    fs.writeFileSync('./data/products.json', JSON.stringify(products, '', 3));
    console.log(products);
}

module.exports = {saveProduct}