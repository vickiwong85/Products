require('dotenv').config();
const express = require('express');
const app = express();
module.exports.app = app;
var db = require('./db');

// Middleware
var morgan = require('morgan');
var cors = require('cors');

// Logging and parsing
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Router
var router = require('./routes.js');

// serve the client files
app.use(express.static('./public'));

// Set up our routes
// app.use wasn't working?
app.get('/products', router);
// app.get('/products', (req, res, next) => {
//   console.log('req.query: ', req.query)
// })

console.log('app.js')
// set port
const PORT = process.env.PORT;
app.listen(PORT);
console.log(`Server listening at port http://localhost:${PORT}`)

