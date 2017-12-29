'use strict';

import smartcast from 'vizio-smart-cast';
import readline from 'readline';
import ex
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

tv.control.menu();
// tv.control.power.off()
// tv.control.power.on();

// smartcast.discover(device => {
// 	console.log(device);
// });