const Gpio = require('pigpio').Gpio;

led1 = new Gpio(4, {mode: Gpio.OUTPUT});
led2 = new Gpio(17, {mode: Gpio.OUTPUT});
led3 = new Gpio(18, {mode: Gpio.OUTPUT});
led4 = new Gpio(27, {mode: Gpio.OUTPUT});
led5 = new Gpio(22, {mode: Gpio.OUTPUT});

module.exports = {
	one: one,
	two: two,
	three: three,
	four: four,
	five: five,
	shutdown: function() {
		setOne(false);
		setTwo(false);
		setThree(false);
		setFour(false);
		setFive(false);
	},
	update: function() {
		setOne(one);
		setTwo(two);
		setThree(three);
		setFour(four);
		setFive(five);
	}
}

var one = false;
var two = false;
var three = false;
var four = false;
var five = false;

function setOne(on) {
	led1.digitalWrite(on ? 1 : 0);
}

function setTwo(on) {
	led2.digitalWrite(on ? 1 : 0);
}

function setThree(on) {
	led3.digitalWrite(on ? 1 : 0);
}

function setFour(on) {
	led4.digitalWrite(on ? 1 : 0);
}

function setFive(on) {
	led5.digitalWrite(on ? 1 : 0);
}
