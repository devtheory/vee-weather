'use strict';

require('dotenv').config();

const request = require('superagent');
const service = require('../server/service');
const http = require('http');

const server = http.createServer(service);

server.listen();

server.on('listening', () => {
  console.log(`Vee weather is listening on ${server.address().port} in ${service.get('env')}`)

  const announce = () => {
    request.put(`http://localhost:3000/service/weather/${server.address().port}`, (err, res) => {
      if(err){
        console.log(err);
        console.log("Error connecting to Vee");
        return;
      }
      console.log(res.body);
    })
  }
  announce();
  setInterval(announce, 15*1000);
});
