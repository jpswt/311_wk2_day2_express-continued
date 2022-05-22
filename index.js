//bring in express framework
const express = require('express');
//bring in bodyParser
const bodyParser = require('body-parser');
// mount the comments, contacts, vehicles and products route module
const comments = require('./routes/comments');
const contacts = require('./routes/contacts');
const vehicles = require('./routes/vehicles');
const products = require('./routes/products');
//instantiate the the application server
const app = express();
//use to serve static resources
app.use(express.static('public'));
//use body parser to read the body data from the request
app.use(bodyParser.json());
// use comments, contacts, vehicles and products route modules
app.use(comments);
app.use(contacts);
app.use(vehicles);
app.use(products);
// port the express app is listening on
const port = process.env.PORT || 4001;
// bind and listens for connections on a given port
app.listen(port, () => {
	console.log(`Web server is listening on port ${port}!`);
});
