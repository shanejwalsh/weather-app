const request = require('request');
const api = require('./API');

const getWeatherFromCoords = (latitude, longitude, callback) => {
	const darkSkyUrl = api.darkSky + `${latitude}, ${longitude}`;
	request({ url: darkSkyUrl + api.c, json: true }, (error, { body }) => {
		const { data } = body.daily;
		const { temperature, precipProbability: rain } = body.currently;
		if (error) {
			callback('unable to connect to weather');
		} else if (body.error) {
			callback('unable to find location');
		} else {
			callback(undefined, data[0].summary + ' It is currently ' + temperature + ' degrees out. The current chance of percipitation is ' + rain + '%');
		}
	});
};

module.exports = getWeatherFromCoords;
