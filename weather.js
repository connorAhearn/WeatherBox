const request = require('request');
const led = require('./led');

let apiKey = '98bf2753916d99845aebbd7d5a0b7f8e';
let city = 'toronto';
let units = 'metric'
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

var one;
var two;
var three;
var four;
var five;
var six;
var seven;
var eight;

module.exports = {
	read: read, 
	start: start,
	lights: lights
}

function read(err, response, body) {
  	if(err) console.log('error:', error);
  	else {
		
		let weather = JSON.parse(body);
		let date = new Date();
						
		console.log('----------------------');
		console.log(months[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes());
		//console.log(`Low in ${weather.name}: ${weather.main.temp_min} Celsius`);
    	//console.log(`High in ${weather.name}: ${weather.main.temp_max} Celsius`);
    	//console.log(`Winds: ${weather.wind.speed} m/s`);
    	for(let i = 0; i < weather.weather.length; i++) console.log(`Condition: ${weather.weather[i].main}`);

		let low = weather.main.temp_min;
		
		one = low > 0;
		two = low <= 0 && low > (-5);
		three = low <= (-5) && low > (-10);
		four = low <= (-10) && low > (-15);
		five = low <= (-15);

		let wind = weather.wind.speed * 2;

		six = wind > 5;
		seven = wind > 10;
		eight = wind > 15;
	}
}

function lights() {
	led.one(one);
	led.two(two);
	led.three(three);
	led.four(four);
	led.five(five);
	led.six(six);
	led.seven(seven);
	led.eight(eight);
	setTimeout(function() {led.shutdown()}, 15000);
}

function start() {
	request(url, read);
	setTimeout(function() {start()}, 1800000);
}
