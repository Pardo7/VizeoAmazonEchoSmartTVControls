// let express = require('express');
// server = express();

let smartcast = require('vizio-smart-cast');
let tv = new smartcast('10.0.0.20', 'xAuthTokenx');

tv.power.currentMode().then(data => {
	// console.log('I\'ve initiated the server');
	// console.log(data);
});

// configure cmd line input
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// Initiate a pairing request with a smartcast device
tv.pairing.initiate().then((response) => {

	// prompt the user for the pin that is displayed on the smartcast device
	rl.question('Enter PIN:', (answer) => {

			// send the pin to the smartcast device to complete the pairing process
			tv.pairing.pair(answer).then((response) => {

					// log the token to be used for future, authenticated requests
					console.log(response.ITEM.AUTH_TOKEN);
			});

			rl.close();
	});
});


tv.input.list().then(data => {
	console.log('-------INPUT LIST--------');
	console.log(data);
});

// smartcast.discover(device => {
// 	console.log(device);
// });