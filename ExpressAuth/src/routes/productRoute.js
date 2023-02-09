const express = require('express');
const { getHomePage, getAboutPage } = require('../controllers/productController');

const router = express.Router()

router.get('/home', getHomePage);
router.get('/about', getAboutPage);

module.exports = router