const geocode = require('./geocode');
const getWeatherFromCoords = require('./getWeather');

geocode('Dublin', getWeatherFromCoords);
