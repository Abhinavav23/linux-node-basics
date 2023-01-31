const express = require('express');
const { signup, login, getProfile } = require('../controllers/userController');
const router = express.Router();

router.post('/signup', signup)
router.post('/login',login)
router.get('/profile/:id', getProfile)

module.exports = router