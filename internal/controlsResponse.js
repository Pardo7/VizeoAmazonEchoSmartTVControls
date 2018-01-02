let controlSuccessResponse = (request, response) => {
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
	});
};

let controlsErrorResponse = response => {

};