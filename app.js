const geocode = require('./utils/geocode');
const getWeatherFromCoords = require('./utils/getWeather');

const location = process.argv[2];

if (!location) {
	console.log('Please provide a location');
} else {
	geocode(location, (error, data) => {
		if (error) {
			return console.log(error);
		}
		getWeatherFromCoords(data.latitude, data.longitude, (error, forecastData) => {
			if (error) {
				return console.log(error);
			}
			console.log(data.location);
			console.log(forecastData);
		});
	});
}
