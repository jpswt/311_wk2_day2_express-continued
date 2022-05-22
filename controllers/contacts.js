//bring in data from contacts.js
const contacts = require('../data/contacts');
// create a variable that is equal to the contacts data array length
let counter = contacts.length;

/**
 * GET list of all contacts
 */

const list = (req, res) => {
	console.log('GET contacts');
	// respond with all contacts
	res.json(contacts);
};

/**
 * GET contact by id
 */

const show = (req, res) => {
	console.log('GET contact by id');
	// create a variable that finds the contact we want to find with given id
	let contact = contacts.find(
		(contact) => contact._id === parseInt(req.params.id)
	);
	// If contact with given id does not exist, respond with a 404 status and message
	if (!contact) {
		res.status(404).send('The contact with the given id is not found');
	}
	// Respond with contact that matches id
	res.json(contact);
};

/**
 * POST new contact to contacts list.  Get name, occupation and avatar
 * from the request body.
 */

const create = (req, res) => {
	console.log('POST new contact');
	// counter increments by one
	counter++;
	// create new contact object
	let newContact = {};
	// new contact id is set to incremented counter
	newContact._id = counter;
	// read name,occupation, avatar from req.body
	newContact.name = req.body.name;
	newContact.occupation = req.body.occupation;
	newContact.avatar = req.body.avatar;
	// add postId to req.body
	newContact.postId = 1;
	// push new contact to contacts array
	contacts.push(newContact);
	// respond with new contact
	res.json(newContact);
};
//export the list, show and create module
module.exports = { list, show, create };
