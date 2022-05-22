//bring in data from comments.js
const comments = require('../data/comments');
// create a variable that is equal to the comments data array length
let counter = comments.length;

/**
 * Get list of all comments
 */
const list = (req, res) => {
	console.log('GET comments');
	//Respond with all comments
	res.json(comments);
};

/**
 * Get a comment by Id
 */

const show = (req, res) => {
	console.log('GET comment by Id');
	// create a variable that finds the comment we want to find with given id
	let comment = comments.find(
		(comment) => comment._id === parseInt(req.params.id)
	);
	// If comment with given id does not exist, respond with a 404 status and message
	if (!comment) {
		res.status(404).send('The comment with given id is not found');
	}
	// Respond with comment that matches the id
	res.json(comment);
};

/**
 * POST new comment to comments list.  Get body information from the
 * request body.
 */

const create = (req, res) => {
	// counter increments by one
	counter++;
	// create new comment object
	let newComment = {};
	// new comment id is set to incremented counter
	newComment._id = counter;
	// read body from req.body
	newComment.body = req.body.body;
	// add postId to req.body
	newComment.postId = 1;
	// push new comment to comments array
	comments.push(newComment);
	// Respond with the new comment
	res.json(newComment);
};
//export the list, show and create module
module.exports = { list, show, create };
