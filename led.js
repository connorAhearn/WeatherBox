var Gpio = require('pigpio').Gpio;

module.exports = {
	one: one,
	two: two,
	three: three,
	four: four,
	five: five,
	shutdown: function() {
		one(false);
		two(false);
		three(false);
		four(false);
		five(false);
	}
}

led1 = new Gpio(4, {mode: Gpio.OUTPUT});
led2 = new Gpio(17, {mode: Gpio.OUTPUT});
led3 = new Gpio(18, {mode: Gpio.OUTPUT});
led4 = new Gpio(27, {mode: Gpio.OUTPUT});
led5 = new Gpio(22, {mode: Gpio.OUTPUT});

function one(on) {
	led1.digitalWrite(on ? 1 : 0);
}

function two(on) {
	led2.digitalWrite(on ? 1 : 0);
}

function three(on) {
	led3.digitalWrite(on ? 1 : 0);
}

function four(on) {
	led4.digitalWrite(on ? 1 : 0);
}

function five(on) {
	led5.digitalWrite(on ? 1 : 0);
}
