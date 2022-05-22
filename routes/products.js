// bring in the express framework
const express = require('express');
// create a new router object to handle requests
const router = express.Router();
// bring in the products controller
const productsController = require('../controllers/products');

// GET route for all products
router.get('/products', productsController.list);
// GET route for product by id
router.get('/products/:id', productsController.show);
// Post route to create a new product
router.post('/products', productsController.create);

// export the router module
module.exports = router;
