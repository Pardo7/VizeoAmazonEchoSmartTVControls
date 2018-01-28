'use strict';

import * as customReq from '../responses/custom-bodies.js';
import smartcast from 'vizio-smart-cast';
import express from 'express';

let tv = new smartcast('10.0.0.20', 'myToken');
let app = express.Router();

app.post('/controloff', (request, response) => {
	console.log("received echo request");
	let requestBody = "";
	// Will accumilate the date
	request.on('data', function(data) {
		requestBody += data;
	});

	// Called when all data has been accumilated
	request.on('end', function() {
		let responseBody = {};
		let jsonData = JSON.parse(requestBody); // Parsing the request body for information

		if (jsonData.request.type == 'LaunchRequest') {
			// crafting a response
			responseBody = customReq.successBody();
			tv.control.power.off();
		} else {
			// Not a recognized type
			responseBody = customReq.errorBody(requestBody);
		}

		response.statusCode = 200;
		response.contentType('application/json');
		response.send(responseBody);
	});
});

app.post('/controlon', (request, response) => {
	let requestBody = "";

	// Will accumilate the date
	request.on('data', data => {
		requestBody += data;
	});

	// Called when all data has been accumilated
	request.on('end', () => {
		let responseBody = {};
		// Parsing the request body for information
		let jsonData = JSON.parse(requestBody);

		if (jsonData.request.type == 'LaunchRequest') {
			// crafting a response
			responseBody = customReq.successBody();
			tv.control.power.on();
		} else {
			// Not a recognized type
			responseBody = customReq.errorBody(requestBody);
		}

		response.statusCode = 200;
		response.contentType('application/json');
		response.send(responseBody);
	});
});

app.post('/inputtwo', (request, response) => {
	let requestBody = "";

	// Will accumilate the date
	request.on('data', data => {
		requestBody += data;
	});

	// Called when all data has been accumilated
	request.on('end', () => {
		let responseBody = {};
		// Parsing the request body for information
		let jsonData = JSON.parse(requestBody);
		// console.log(jsonData);
		if (jsonData.request.type == 'LaunchRequest') {
			// crafting a response
			responseBody = customReq.successBody();
			tv.input.set('HDMI-2');
		} else {
			// Not a recognized type
			responseBody = customReq.errorBody(responseBody);
		}

		response.statusCode = 200;
		response.contentType('application/json');
		response.send(responseBody);
	});
});

app.post('/inputthree', (request, response) => {
	let requestBody = "";

	// Will accumilate the date
	request.on('data', data => {
		requestBody += data;
	});

	// Called when all data has been accumilated
	request.on('end', () => {
		let responseBody = {};
		// Parsing the request body for information
		let jsonData = JSON.parse(requestBody);

		if (jsonData.request.type == 'LaunchRequest') {
			// crafting a response
			responseBody = customReq.successBody();
			tv.input.set('HDMI-3');
		} else {
			// Not a recognized type
			responseBody = customReq.errorBody(requestBody);
		}

		response.statusCode = 200;
		response.contentType('application/json');
		response.send(responseBody);
	});
});

app.post('/volumeup', (request, response) => {
	let requestBody = "";

	// Will accumilate the date
	request.on('data', data => {
		requestBody += data;
	});

	// Called when all data has been accumilated
	request.on('end', () => {
		let responseBody = {};
		// Parsing the request body for information
		let jsonData = JSON.parse(requestBody);

		if (jsonData.request.type == 'LaunchRequest') {
			// crafting a response
			responseBody = customReq.successBody();
			tv.control.volume.up();
			tv.control.volume.up();
		} else {
			// Not a recognized type
			responseBody = customReq.errorBody(responseBody);
		}

		response.statusCode = 200;
		response.contentType('application/json');
		response.send(responseBody);
	});
});

app.post('/volumedown', (request, response) => {
	let requestBody = "";

	// Will accumilate the date
	request.on('data', data => {
		requestBody += data;
	});

	// Called when all data has been accumilated
	request.on('end', () => {
		let responseBody = {};
		// Parsing the request body for information
		let jsonData = JSON.parse(requestBody);

		if (jsonData.request.type == 'LaunchRequest') {
			// crafting a response
			responseBody = customReq.successBody();
			tv.control.volume.down();
			tv.control.volume.down();
		} else {
			// Not a recognized type
			responseBody = customReq.errorBody(responseBody);
		}

		response.statusCode = 200;
		response.contentType('application/json');
		response.send(responseBody);
	});
});

export default app;
