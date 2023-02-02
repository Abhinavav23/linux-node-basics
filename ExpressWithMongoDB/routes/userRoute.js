const express = require('express');
const { signup, login, getProfile, getUsers } = require('../controllers/userController');
const router = express.Router();

router.post('/signup', signup)
router.post('/login',login)
router.get('/profile/:id', getProfile);
router.get('/userList', getUsers)

module.exports = router