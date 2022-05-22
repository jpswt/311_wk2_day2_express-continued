// bring in the express framework
const express = require('express');
// create a new router object to handle requests
const router = express.Router();
// bring in the vehicles controller
const vehiclesController = require('../controllers/vehicles');

// GET route for all vehicles
router.get('/vehicles', vehiclesController.list);
// GET route for vehicle by id
router.get('/vehicles/:id', vehiclesController.show);
// POST route to create a new vehicle
router.post('/vehicles', vehiclesController.create);

// export the router module
module.exports = router;
