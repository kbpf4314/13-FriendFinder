// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// pull my friends.js data
let friends = require('../data/friends.js');

// to call the express application
const app = express();

// set up our routes
module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    })

    app.post('/api/friends', function (req, res) {
        const user = req.body;
        const arrayResponses = user.scores;
        console.log(arrayResponses);

        // this is where I'd be computing the match between two different surveyors

            // pushes new data into my surveyArray where all my friends are stored.
            friends.push(user);
            res.json(true);
	});
}