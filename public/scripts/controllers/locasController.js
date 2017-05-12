angular.module('fishHappensApp')
	.controller('LocaController', LocaController)
;

LocaController.$inject = ['$http'];
function LocaController ($http) {
	let vm = this;
	let day = {
		High: "77",
		Low: "",
		Conditions: "",
		MaxWind: "",
		Icon: "",
		Name: ""
	};
	vm.fourDays = [];
	let latlng = "43.856501,-110.480835";
	vm.locaObject = {};
	vm.locasList = [
		{
			name: 'Nepal',
			elevation: '6,677\'',
			temp: 99,
			current: {
				temp: '73',
			},
			fourDay: [{
				high: "67",
			},
			{
				high: "88",
			}],
			moon: {
				moonrise: '5:45',
			}
		}
	];

	console.log("fourday controller is working");
	$http
		.get('/api/weather/current/' + latlng)
		.then(function(response) {
			console.log("am i working still?");
			console.log("current day is: ", response);
			// Probably don't need 
			// locaObject.city_state = response.city_state;
			// locaObject.elevation = response.elevation + "'";
			// locaObject.current.icon = response.icon;
			// locaObject.current.pressure = response.pressure;
			// locaObject.current.pressure_trend = response.pressure_trend;
			current = response;
			vm.locasList.push(current);
			console.log('Who am i??');
			console.log(vm.locasList);
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