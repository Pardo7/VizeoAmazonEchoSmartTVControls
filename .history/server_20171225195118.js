// let express = require('express');
// server = express();

let smartcast = require('vizio-smart-cast');
let readline = require('readline');
let tv = new smartcast('10.0.0.20', 'Zj9aolqqky');

tv.power.currentMode().then(data => {
	// console.log('I\'ve initiated the server');
	// console.log(data);
});

tv.input.list().then(data => {
	console.log('-------INPUT LIST--------');
	console.log(data);
});

tv.input.current().then(data => {
	console.log('response', data);
});

// tv.control.volume.down();

// tv.control.menu();
// tv.control.power.off()
// tv.control.power.on();

// smartcast.discover(device => {
// 	console.log(device);
// });



// // configure cmd line input
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// });

// // Initiate a pairing request with a smartcast device
// tv.pairing.initiate().then((response) => {

// 	// prompt the user for the pin that is displayed on the smartcast device
// 	rl.question('Enter PIN:', (answer) => {

// 			// send the pin to the smartcast device to complete the pairing process
// 			tv.pairing.pair(answer).then((response) => {

// 					// log the token to be used for future, authenticated requests
// 					console.log(response.ITEM.AUTH_TOKEN);
// 			});

// 			rl.close();
// 	});
// });