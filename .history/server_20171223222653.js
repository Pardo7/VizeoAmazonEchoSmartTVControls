let smartcast = require('vizio-smart-cast');
let tv = new smartcast('192.169.0.101');

tv.power.currentMode(function(data) {
	console.log(data);
});


