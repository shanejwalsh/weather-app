const geocode = require('./utils/geocode');
const getWeatherFromCoords = require('./utils/getWeather');

const location = process.argv[2];

if (!location) {
	console.log('Please provide a location');
} else {
	geocode(location, (error, data) => {
		const { latitude, longitude, location } = data;

		if (error) {
			return console.log(error);
		}
		getWeatherFromCoords(latitude, longitude, (error, forecastData) => {
			if (error) {
				return console.log(error);
			}
			console.log(location);
			console.log(forecastData);
		});
	});
}
