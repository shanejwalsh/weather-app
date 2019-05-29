const request = require('request');

const URL =
	'https://api.darksky.net/forecast/69c32d20821221c526bc5321df1f646b/37.8267,-122.4233';

fetch(URL)
	.then(resp => resp.json())
	.then(data => console.log(data));
