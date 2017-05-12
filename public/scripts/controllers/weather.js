angular.module('fishHappensApp')
	.controller('WeatherController', WeatherController)
;



WeatherController.$inject = ['$http'];
function WeatherController ($http) {
	let vm = this;
	let day = {
		dayHigh: "",
		dayLow: "",
		dayConditions: "",
		dayMaxWind: "",
		dayIcon: "",
		dayName: ""
	};
	vm.fourDays = [];
	let latlng = "43.856501,-110.480835";

	console.log("fourday controller is working");
	$http
		.get('/api/weather/current/' + latlng)
		.then(function(response) {
			console.log("am i working still?");
			console.log("current day is: ", response);

		});

		$http
			.get('/api/weather/fourday/' + latlng)
			.then(function(response) {
				console.log("am i working still?");
				console.log("four day is: ", response);

			});

			$http
				.get('/api/weather/astronomy/' + latlng)
				.then(function(response) {
					console.log("am i working still?");
					console.log("astronomy is: ", response);

				});


}