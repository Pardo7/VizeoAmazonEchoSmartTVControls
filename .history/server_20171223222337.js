let smartcast = require('vizeo-smart-cast');
let tv = new smartcast('192.169.0.101');

tv.power.currentMode().then