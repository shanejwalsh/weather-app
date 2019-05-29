const request = require('request');
const api = require('./API');

request({ url: api.darkSky + api.c, json: true }, (error, response) => {
	const data = response.body;
	console.log(
		data.daily.data[0].summary +
			' It is currently ' +
			data.currently.temperature +
			' degrees out. The current chance of percipitation is ' +
			data.currently.precipProbability +
			'%'
	);
});

request({ url: api.mapBox, json: true }, (error, response) => {
	const coords = response.body.features[0].center;
	console.log('Latitude: ' + coords[1] + ' Longitude: ' + coords[0]);
});
