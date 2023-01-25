const { saveProduct } = require("../models/productModel");


const productsList = ['test', 'test1']
const getAllProducts = (req, res) => {
  console.log("getting all products");
  res.send(productsList);
};

const getProduct = (req, res) => {
  console.log("getting one products");
  const product = productsList.find((product) => product.id === req.params.id);
  res.send(product);
};

const createProduct = (req, res) => {
  console.log("creating product");
  saveProduct(req.body);
//   res.status(204);
  res.send('created product');
};

const updateProduct = (req, res) => {
  productsList.forEach((product, i) => {
    if (product.id === req.params.id) {
      productsList[i] = req.body;
    }
  });
  res.send(productsList);
};

const deleteProduct = (req, res) => {
  // const filetredProduct = productsList.filter((product) =>  product.id !== req.params.id);
  // productsList = filetredProduct
  // res.send(filetredProduct)
};

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};


// http status code
// 100 ---> informational
// 200 ---> success Response ---> 200, 204 nocontent, 201
// 300 ---> redirection --> 301, 304, 307, --
// 400 ---> client error
// 500 ---> server error 500