const request = require('request');
const api = require('./API');

const getWeatherFromCoords = (error, coordsObj) => {
	const darkSkyUrl = api.darkSky + `${coordsObj.latitude}, ${coordsObj.longitude}`;

	if (error) {
		console.log(error);
	} else {
		request({ url: darkSkyUrl + api.c, json: true }, (error, response) => {
			if (error) {
				console.log('Unable to connect to weather service');
			} else if (response.body.error) {
				console.log('unable to find location');
			} else {
				const data = response.body;
				console.log(coordsObj.location);
				console.log(data.daily.data[0].summary + ' It is currently ' + data.currently.temperature + ' degrees out. The current chance of percipitation is ' + data.currently.precipProbability + '%');
			}
		});
	}
};

module.exports = getWeatherFromCoords;
