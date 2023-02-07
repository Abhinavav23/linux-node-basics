const express = require('express');
const {signup, login, getBatchInfo, getProfile} = require('../controllers/useController');

const router = express.Router()

router.post('/signup', signup);
router.post('/login', login);

// auth middleware
router.get('/myBatch', getBatchInfo);
router.get('/profile', getProfile);


module.exports = router