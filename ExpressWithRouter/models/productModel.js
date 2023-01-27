const fs = require('fs')

const get = () => {
    // const data = fs.readFileSync('./data/products.json');
    // const products = JSON.parse(data);
    // return products
    try{
        const products = fs.readFileSync('./data/products.json')
        return products
    } catch(e){
        console.log(e.message);
        return false
    }
}

const save = (product) => {
    const products = get();
    if(products){
        products.push({id: products.length+1, ...product});
        // fs.writeFile('./data/products.json', JSON.stringify(products, '', 3), (err) => {
        //     if(err){
        //         console.log(e.message);
        //         return false
        //     }
        // })
        try{
            fs.writeFileSync('./data/products.json', JSON.stringify(products, '', 3));
            return true
        }catch(e){
            console.log(e.message);
            return false
        }
    }
    return false
}

const update = (productId, dataToBeUpdated) => {
    const products = get();
    products.forEach((product, i) => {
        if(product.id === +productId){
            products[i] = {...product, ...dataToBeUpdated}
        }
    });
    fs.writeFileSync('./data/products.json', JSON.stringify(products, '', 3));
    console.log(products);
}

const deleteData = (productId) => {
    const products = get();
    console.log(products);
    const updated = products.filter((product) => product.id !== +productId);
    fs.writeFileSync('./data/products.json', JSON.stringify(updated, '', 3));
}

module.exports = {get, save, update, deleteData}