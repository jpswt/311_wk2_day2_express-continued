//bring in data from comments.js
const vehicles = require('../data/vehicles');
// create a variable that is equal to the vehicles data array length
let counter = vehicles.length;

/**
 * GET all vehicles list
 */

const list = (req, res) => {
	console.log('GET vehicle list');
	// respond with all the vehicles
	res.json(vehicles);
};

/**
 * GET products with given id.
 */

const show = (req, res) => {
	console.log('GET vehicle by id');
	// create a variable that finds the product we want to find with given id
	let vehicle = vehicles.find(
		(vehicle) => vehicle._id === parseInt(req.params.id)
	);
	// If product with given id does not exist, respond with a 404 status and message
	if (!vehicle) {
		res.status(404).send('The vehicle with the given id is not found');
	}
	// Respond with product that matches the given id
	res.json(vehicle);
};

/**
 * POST new vehicle to vehicles list.  Get year, make and model
 * from the request body.
 */

const create = (req, res) => {
	console.log('POST new vehicle');
	// counter increments by one
	counter++;
	// create new vehicle object
	let newVehicle = {};
	// new vehicle id is set to incremented counter
	newVehicle._id = counter;
	// read year, make and model from req.body
	newVehicle.year = req.body.year;
	newVehicle.make = req.body.make;
	newVehicle.model = req.body.model;
	// add postId to req.body
	newVehicle.postID = 1;
	// push new vehicle to vehicles array
	vehicles.push(newVehicle);
	// respond with new vehicle
	res.json(newVehicle);
};
//export the list, show and create module
module.exports = { list, show, create };
