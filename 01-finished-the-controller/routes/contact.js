
const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();


router.get('/contactus', productsController.addContact);


router.post('/success', productsController.Success);

module.exports = router;
