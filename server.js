'use strict';

import smartcast from 'vizio-smart-cast';
import readline from 'readline';
import { request } from 'http';
import ejs from 'ejs';

// import express from 'express';
var express = require('express');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({
	extended: true
});
// import request 	 from 'request';
let tv = new smartcast('10.0.0.20', 'Zj9aolqqky');
let app = express();
let server = require('http').createServer(app);
app.set('view engine', 'ejs');
const port = process.env.PORT || 3000;

server.listen(port, () => {
	console.log('Servers Up Sir');
	console.log(port);
});

app.get('/', (request, response) => {
	response.send('<h1>Server Initialized</h1>');
});

// app.post('/controloff', (request, response) => {
// 	response.send('<h1>Complete</h1>');
// });


// tv.power.currentMode().then(data => {
// 	// console.log('I\'ve initiated the server');
// 	// console.log(data);
// });

// tv.input.list().then(data => {
// 	console.log('-------INPUT LIST--------');
// 	console.log(data);
// });

// tv.input.current().then(data => {
// 	console.log('response', data);
// });

// tv.control.volume.down();


app.post('/controloff', (request, response) => {
	// tv.control.menu();

	console.log("received echo request");
	var requestBody = "";

	// Will accumilate the date
	request.on('data', function(data) {
		requestBody += data;
	});

	// Called when all data has been accumilated
	request.on('end', function() {
		var responseBody = {};
		// console.log(requestBody);
		// console.log(JSON.stringify(requestBody));
		// Parsing the request body for information
		var jsonData = JSON.parse(requestBody);
		console.log(jsonData);
		if (jsonData.request.type == 'LaunchRequest') {

			// crafting a response
			responseBody = {
				"version": "0.1",
				"response": {
					"outputSpeech": {
						"type": "PlainText",
						"text": "Welcome Mr. Pardo, I'll have that taken care of sir."
					},
					"card": {
						"type": "Simple",
						"title": "Opened",
						"content": "You have started the Sudo AI Node Control"
					},
					"reprompt": {
						"outputSpeech": {
							"type": "PlainText",
							"text": "Say a command"
						}
					},
					"shouldEndSession": true
				}
			};

			tv.control.power.off();

		} else {
			// Not a recognized type
			responseBody = {
				"version": "0.1",
				"response": {
					"outputSpeech": {
						"type": "PlainText",
						"text": "Could not parse data"
					},
					"card": {
						"type": "Simple",
						"title": "Error Parsing",
						"content": JSON.stringify(requestBody)
					},
					"reprompt": {
						"outputSpeech": {
							"type": "PlainText",
							"text": "Say a command"
						}
					},
					"shouldEndSession": true
				}
			};
		}

		response.statusCode = 200;
		response.contentType('application/json');
		response.send(responseBody);

	});
});

app.post('/controlon', (request, response) => {
	// tv.control.menu();

	console.log("received echo request");
	var requestBody = "";

	// Will accumilate the date
	request.on('data', function(data) {
		requestBody += data;
	});

	// Called when all data has been accumilated
	request.on('end', function() {
		var responseBody = {};
		// console.log(requestBody);
		// console.log(JSON.stringify(requestBody));
		// Parsing the request body for information
		var jsonData = JSON.parse(requestBody);
		console.log(jsonData);
		if (jsonData.request.type == 'LaunchRequest') {

			// crafting a response
			responseBody = {
				"version": "0.1",
				"response": {
					"outputSpeech": {
						"type": "PlainText",
						"text": "Welcome Mr. Pardo, I've turned on your media."
					},
					"card": {
						"type": "Simple",
						"title": "Opened",
						"content": "You have started the Sudo AI Node Control"
					},
					"reprompt": {
						"outputSpeech": {
							"type": "PlainText",
							"text": "Say a command"
						}
					},
					"shouldEndSession": true
				}
			};

			tv.control.power.on();

		} else {
			// Not a recognized type
			responseBody = {
				"version": "0.1",
				"response": {
					"outputSpeech": {
						"type": "PlainText",
						"text": "Could not parse data"
					},
					"card": {
						"type": "Simple",
						"title": "Error Parsing",
						"content": JSON.stringify(requestBody)
					},
					"reprompt": {
						"outputSpeech": {
							"type": "PlainText",
							"text": "Say a command"
						}
					},
					"shouldEndSession": true
				}
			};
		}

		response.statusCode = 200;
		response.contentType('application/json');
		response.send(responseBody);

	});
});

// smartcast.discover(device => {
// 	console.log(device);
// });