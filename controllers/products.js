//bring in data from comments.js
const products = require('../data/products');
// create a variable that is equal to the products data array length
let counter = products.length;

/**
 * GET all products list
 */

let list = (req, res) => {
	console.log('GET products list');
	//Respond with all products
	res.json(products);
};

/**
 * GET products with given id.
 */

let show = (req, res) => {
	// create a variable that finds the product we want to find with given id
	let product = products.find(
		(product) => product._id === parseInt(req.params.id)
	);
	// If product with given id does not exist, respond with a 404 status and message
	if (!product) {
		res.status(404).send('The product with the given id is not found');
	}
	// Respond with product that matches the given id
	res.json(product);
};

/**
 * POST new product to products list.  Get name and description
 * from the request body.
 */

const create = (req, res) => {
	console.log('POST new product');
	// counter increments by one
	counter++;
	// create new product object
	let newProduct = {};
	// new product id is set to incremented counter
	newProduct._id = counter;
	// read name and description from req.body
	newProduct.name = req.body.name;
	newProduct.description = req.body.description;
	// add postId to req.body
	newProduct.postId = 1;
	// push new product to products array
	products.push(newProduct);
	// respond with new product
	res.json(newProduct);
};
//export the list, show and create module
module.exports = { list, show, create };
