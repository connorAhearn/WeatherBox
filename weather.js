const request = require('request');
const led = require('./led');

let apiKey = '98bf2753916d99845aebbd7d5a0b7f8e';
let city = 'toronto';
let units = 'metric'
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

function update(err, response, body) {
  	if(err) console.log('error:', error);
  	else {
    		let weather = JSON.parse(body);
		let weather2 = JSON.stringify(weather.weather);
    		weather2 = weather2.replace('[', '');
    		weather2 = weather2.replace(']', '');
		weather2P = JSON.parse(weather2);
		console.log(`Low in ${weather.name}: ${weather.main.temp_min} Celsius`);
		console.log(`High in ${weather.name}: ${weather.main.temp_max} Celsius`);
		console.log(`Winds: ${weather.wind.speed} m/s`);
		console.log(`Conditions: ${weather2P.main}`);
		led.one(true);
		led.three(true);
		setTimeout(function() {led.shutdown()}, 15000);
	}
}


request(url, update);
