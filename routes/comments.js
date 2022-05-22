// bring in the express framework
const express = require('express');
// create a new router object to handle requests
const router = express.Router();
// bring in the comments controller
const commentsController = require('../controllers/comments');

// GET route for all comments
router.get('/comments', commentsController.list);
// GET route for comment by id
router.get('/comments/:id', commentsController.show);
// POST route to create a new comment
router.post('/comments', commentsController.create);

// export the router module
module.exports = router;
