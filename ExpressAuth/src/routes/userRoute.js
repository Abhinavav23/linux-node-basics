const express = require('express');
const {signup, login, getBatchInfo, getProfile, logoutUser, getAllUsers} = require('../controllers/useController');
const { authUser } = require('../middleware/authMiddleware');

const router = express.Router()

router.post('/signup', signup);
router.post('/login', login);

// auth middleware
router.get('/myBatch', authUser, getBatchInfo);
router.get('/profile', authUser, getProfile);
router.get('/listAllUsers', authUser, getAllUsers);

router.delete('/logout', logoutUser);

module.exports = router