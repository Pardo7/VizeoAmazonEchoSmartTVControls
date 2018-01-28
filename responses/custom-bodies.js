'use strict';

export const successBody = function() {
	console.log('CALLING SUCCESS BODY');
	const responseBody = {
		"version": "0.1",
		"response": {
			"outputSpeech": {
				"type": "PlainText",
				"text": "Welcome, I've turned on your media."
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

	return responseBody;
};

export const errorBody = function(requestBody) {
	const errBody = {
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

	return errBody;
};
