const request = require('request');
const api = require('./API');

const geocode = (location, callback) => {
	const mapBoxUrl = api.mapBox1 + encodeURIComponent(location) + api.mapBox2;

	request({ url: mapBoxUrl, json: true }, (error, response) => {
		const { features } = response.body;
		if (error) {
			callback('unable to connect to server');
		} else if (features.length === 0) {
			callback('unable to find coordinates');
		} else {
			callback(undefined, {
				latitude: features[0].center[1],
				longitude: features[0].center[0],
				location: features[0].place_name
			});
		}
	});
};

module.exports = geocode;
