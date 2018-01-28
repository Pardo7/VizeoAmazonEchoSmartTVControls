'use strict';

import express from 'express';
import readline from 'readline';
import * as customReq from './responses/custom-bodies.js';
import { request } from 'http';
import ejs from 'ejs';
import bodyParser from 'body-parser';
import smartControlRoutes from './internal/smart-control-routes.js';

let parseUrlencoded = bodyParser.urlencoded({ extended: true });
let app = express();
let server = require('http').createServer(app);
app.set('view engine', 'ejs');

app.use(smartControlRoutes);

const port = process.env.PORT || 3000;

server.listen(port, () => {
	console.log(`Servers up on Port: ${port}`);
});

app.get('/', (request, response) => {
	response.send('<h1>Server Initialized</h1>');
});
