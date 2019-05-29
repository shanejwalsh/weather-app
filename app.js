const geocode = require('./utils/geocode');
const getWeatherFromCoords = require('./utils/getWeather');

geocode('Dublin', getWeatherFromCoords);
