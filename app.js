const request = require('request');
const api = require('./API');

const geocode = (location, callback) => {
	const mapBoxUrl = api.mapBox1 + location + api.mapBox2;

	request({ url: mapBoxUrl, json: true }, (error, response) => {
		const { features } = response.body;
		if (error) {
			console.log('unable to connect to server');
		} else if (features.length === 0) {
			console.log('unable to find coordinates');
		} else {
			console.log(features[0].place_name);
			callback(features[0].center);
		}
	});
};

const getWeatherFromCoords = coodsArray => {
	const darkSkyUrl = api.darkSky + `${coodsArray[1]}, ${coodsArray[0]}`;

	request({ url: darkSkyUrl + api.c, json: true }, (error, response) => {
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
