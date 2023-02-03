const express = require("express");
const {
  createProduct
} = require("../controllers/products/productController");

const router = express.Router();

router.post("/create", createProduct);
// router.post("/login", login);
// router.get("/profile/:id", getProfile);
// router.get("/userList", getUsers);
// // router.patch('/editUser/:id', updateUser);
// router.patch("/editUser/:email", updateUser);
// router.patch("/editBatch", updateUser);
// // router.delete('/:id', deleteUser);
// router.delete("/", deleteUserV2);
// // router.get("/paginatedUser", getUserPaginated);

module.exports = router