const request = require('request');

let apiKey = '98bf2753916d99845aebbd7d5a0b7f8e';
let city = 'toronto';
let units = 'metric'
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

var loop = 0;
var end = 10;

function update(err, response, body) {
  if(err) console.log('error:', error);
  else {
    loop++;
    console.log('---------------');
    console.log(`repeat: ${loop} of ${end}`);
    console.log('---------------');

    let weather = JSON.parse(body);
    let weather2 = JSON.stringify(weather.weather);
    weather2 = weather2.replace('[', '');
    weather2 = weather2.replace(']', '');
    weather2 = (weather2.includes("},{")) ? weather2.split("},{")[0] + "}" : weather2;	
    weather2P = JSON.parse(weather2);
    console.log(`Low in ${weather.name}: ${weather.main.temp_min} Celsius`);
    console.log(`High in ${weather.name}: ${weather.main.temp_max} Celsius`);
    console.log(`Winds: ${weather.wind.speed} m/s`);
    console.log(`Conditions: ${weather2P.main}`);

    if(loop < 10) {
      setTimeout(function(){request(url, update)}, 3000);
    }
}}

request(url, update);
