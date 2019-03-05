require('dotenv').load();
const prerender = require('prerender');
const cache = require('prerender-memory-cache');
const server = prerender();
server.use(cache);
server.start();

