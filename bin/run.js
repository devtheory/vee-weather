'use strict';

require('dotenv').config();

const request = require('superagent');
const service = require('../server/service');
const http = require('http');

const server = http.createServer(service);

server.listen();

server.on('listening', () => {
  console.log(`Vee weather is listening on ${server.address().port} in ${service.get('env')}`)
});
