const { save, deleteData, update, get } = require("../models/productModel");

const getAllProducts = (req, res) => {
  console.log("getting all products");
  const products = get()
  res.send(products);
};

const getProduct = (req, res) => {
  console.log("getting one products");
  const product = productsList.find((product) => product.id === req.params.id);
  res.send(product);
};

const createProduct = (req, res) => {
  console.log("creating product");
  const result = save(req.body);
  if(result){
    res.status(201);
    res.send('created product');
  } else{
    res.status(504);
    res.send('cant create product, please try again!');
  }
  // res.status(201).send('created product');
};

const updateProduct = (req, res) => {
  productsList.forEach((product, i) => {
    if (product.id === req.params.id) {
      productsList[i] = req.body;
    }
  });
  res.send(productsList);
};

const editProduct = (req, res) => {
  update(req.params.id, req.body)
  res.send('product updated successfully')
}

const deleteProduct = (req, res) => {
  deleteData(req.params.id);
  res.send('product deleted successfully')
};

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  editProduct
};


// http status code
// 100 ---> informational
// 200 ---> success Response ---> 200, 204 nocontent, 201
// 300 ---> redirection --> 301, 304, 307, --
// 400 ---> client error
// 500 ---> server error 500