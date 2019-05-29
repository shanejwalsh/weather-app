const request = require('request');
const api = require('./API');

const geocode = (location, callback) => {
	request({ url: api.mapBox, json: true }, (error, response) => {
		if (error) {
			console.log('unable to connect to server');
		} else if (response.body.features.length === 0) {
			console.log('unable to find coordinates');
		} else {
			const coords = response.body.features[0].center;
			callback(coords);
		}
	});
};

const getWeatherFromCoords = coodsArray => {
	const url = api.darkSky + `${coodsArray[1]}, ${coodsArray[0]}`;

	request({ url: url + api.c, json: true }, (error, response) => {
		if (error) {
			console.log('Unable to connect to weather service');
		} else if (response.body.error) {
			console.log('unable to find location');
		} else {
			const data = response.body;
			console.log(data.daily.data[0].summary + ' It is currently ' + data.currently.temperature + ' degrees out. The current chance of percipitation is ' + data.currently.precipProbability + '%');
		}
	});
};

geocode('Dublin', getWeatherFromCoords);
