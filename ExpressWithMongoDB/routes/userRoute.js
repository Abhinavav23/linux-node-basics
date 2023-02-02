const express = require("express");
const {
  signup,
  login,
  getProfile,
  getUsers,
  updateUser,
  deleteUser,
  deleteUserV2,
  getUserPaginated,
  getUserPaginatedV2,
} = require("../controllers/userController");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/profile/:id", getProfile);
router.get("/userList", getUsers);
// router.patch('/editUser/:id', updateUser);
router.patch("/editUser/:email", updateUser);
router.patch("/editBatch", updateUser);
// router.delete('/:id', deleteUser);
router.delete("/", deleteUserV2);
// router.get("/paginatedUser", getUserPaginated);
router.get("/paginatedUser", getUserPaginatedV2);


module.exports = router;
