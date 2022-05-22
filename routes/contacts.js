// bring in the express framework
const express = require('express');
// create a new router object to handle requests
const router = express.Router();
// bring in the contacts controller
const contactsController = require('../controllers/contacts');

// GET route for all contacts
router.get('/contacts', contactsController.list);
// GET route for contact by id
router.get('/contacts/:id', contactsController.show);
// Post route to create a new contact
router.post('/contacts', contactsController.create);

// export the router module
module.exports = router;
