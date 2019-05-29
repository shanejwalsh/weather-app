const request = require('request');

fetch(URL)
	.then(resp => resp.json())
	.then(data => console.log(data));
