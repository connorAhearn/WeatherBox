const Gpio = require('pigpio').Gpio;
const weather = require('./weather');

button = new Gpio(23, {
    mode: Gpio.INPUT,
    pullUpDown: Gpio.PUD_DOWN,
    edge: Gpio.EITHER_EDGE
});

button.on('interrupt', function() {
    weather.lights();
});

weather.start();