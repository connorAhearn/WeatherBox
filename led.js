const Gpio = require('pigpio').Gpio;

led1 = new Gpio(4, {mode: Gpio.OUTPUT});
led2 = new Gpio(17, {mode: Gpio.OUTPUT});
led3 = new Gpio(18, {mode: Gpio.OUTPUT});
led4 = new Gpio(27, {mode: Gpio.OUTPUT});
led5 = new Gpio(22, {mode: Gpio.OUTPUT});
led6 = new Gpio(24, {mode: Gpio.OUTPUT});
led7 = new Gpio(25, {mode: Gpio.OUTPUT});
led8 = new Gpio(5, {mode: Gpio.OUTPUT});

module.exports = {
	one: setOne,
	two: setTwo,
	three: setThree,
	four: setFour,
	five: setFive,
	six: setSix,
	seven: setSeven,
	eight: setEight,
	shutdown: function() {
		setOne(false);
		setTwo(false);
		setThree(false);
		setFour(false);
		setFive(false);
		setSix(false);
		setSeven(false);
		setEight(false);
	}
}

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

function setSix(on) {
	led6.digitalWrite(on ? 1 : 0);
}

function setSeven(on) {
	led7.digitalWrite(on ? 1 : 0);
}

function setEight(on) {
	led8.digitalWrite(on ? 1 : 0);
}
