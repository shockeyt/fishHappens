'use strict'

let request = require('request');
const wKey = process.env.weatherKey;

function getFourDay (req, res) {
	let latlng = req.params.id;
	console.log(latlng);
	//request
	let url = 'http://api.wunderground.com/api/' + wKey + '/forecast/q/' + latlng + '.json';
	request (url, function (error, response, body) {
		let parseBody = JSON.parse(body);
		console.log("four day is:", parseBody);
		res.json(parseBody);
	});

}

function getCurrentDay (req, res) {
	let latlng = req.params.id;

	let url = 'http://api.wunderground.com/api/' + wKey + '/conditions/q/' + latlng + '.json';
	request (url, function (error, response, body) {
		let parseBody = JSON.parse(body);
		console.log("current day is:", parseBody);
		res.json(parseBody);
	});


	}

function getAstronomy (req, res) {
	let latlng = req.params.id;

	let url = 'http://api.wunderground.com/api/' + wKey + '/astronomy/q/' + latlng + '.json';
	request (url, function (error, response, body) {
		var parseBody = JSON.parse(body);
		console.log(parseBody);
		res.json(parseBody);
	});
}

function getHourly (req, res) {
	let latlng = req.params.id;

	let url = 'http://api.wunderground.com/api/' + wKey + '/hourly/q/' + latlng + '.json';
	request (url, function (error, response, body) {
		var parseBody = JSON.parse(body);
		console.log(parseBody);
	});
}

function getFutureMoon (req, res) {
	let latlng = req.params.id;

	let url = 'http://api.usno.navy.mil/rstt/oneday?date=5/9/2017&coords=' + latlng;
	request (url, function (error, response, body) {
		var parseBody = JSON.parse(body);
		console.log(parseBody);
	});
}






module.exports = {
	getFourDay: getFourDay,
	getCurrentDay: getCurrentDay,
	getAstronomy: getAstronomy,
	getHourly: getHourly,
	getFutureMoon: getFutureMoon
};
