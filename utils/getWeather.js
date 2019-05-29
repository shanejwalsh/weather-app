const request = require('request');
const api = require('./API');

const getWeatherFromCoords = (latitude, longitude, callback) => {
	const darkSkyUrl = api.darkSky + `${latitude}, ${longitude}`;
	request({ url: darkSkyUrl + api.c, json: true }, (error, response) => {
		if (error) {
			callback('unable to connect to weather');
		} else if (response.body.error) {
			callback('unable to find location');
		} else {
			callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. The current chance of percipitation is ' + response.body.currently.precipProbability + '%');
		}
	});
};

module.exports = getWeatherFromCoords;
