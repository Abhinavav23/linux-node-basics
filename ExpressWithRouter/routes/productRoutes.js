const express = require("express");
const router = express.Router();
const {
  getProduct,
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  editProduct,
} = require("../controllers/productController");

// http://localhost:5800/products/

// router.get('/', getAllProducts)
// router.post('/', createProduct)

router.route("/").get(getAllProducts).post(createProduct);

// for getting single product
// router.get('/:id', getProduct);
// // for update single product
// router.put('/:id', updateProduct);
// router.delete('/:id', deleteProduct)

router
  .route("/:id")
  .get(getProduct)
  .put(updateProduct)
  .delete(deleteProduct)
  .patch(editProduct);

router.get("/mobile", (req, res) => {
  res.send("mobiles");
});

// app.route('/products')
// .get((req, res) => {
//     console.log(req.query);
//     res.send({productsList})
// })
// .post((req, res) => {
//     res.send('product added')
// })

module.exports = router;
