// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// set up the port 
const PORT = process.env.PORT || 3000;

// create new fresh express app
const app = express();

// add middleware to change data into usable form
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

// add the application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

  // set up server to listen to requests from the client
  app.listen(PORT, function(err) {
    if (err) throw err;
    console.log('Friend Finder is listening on port', PORT);
  })
