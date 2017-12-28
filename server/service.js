'use strict';

const express = require('express');
const service = express();
const request = require('superagent');

service.get(`/service/:location`, (req, res, next) => {
  request.get(`http://api.openweathermap.org/data/2.5/weather?q=${req.params.location}&APPID=${process.env.OPENWEATHER_API_KEY}&units=metric`, (err, response) => {
    if(err){
      console.log(err);
      return res.sendStatus(500);
    }
    let temp = Math.floor(1.8 * response.body.main.temp + 32);
    res.json({result: `The weather in ${req.params.location} is now ${response.body.weather[0].description} with a temperature of ${temp} degrees farenheit`});
  })
})

module.exports = service;
