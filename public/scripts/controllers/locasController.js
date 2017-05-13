angular.module('fishHappensApp')
	.controller('LocaController', LocaController)
;



LocaController.$inject = ['$http'];
function LocaController ($http) {
	let vm = this;
	let latlng = "43.856501,-110.480835";

	let locaObject = {
		// resCount: 0,
		id: 1,
		current: {},
		fourDays: [],
		// flow: {},
		astronomy: {},
	};

	vm.locasList = [
		{
			name: 'Nepal',
			elevation: '6,678\'',
			temp: 99,
			current: {
				temp: 'TEST locaObject',
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
		},
		locaObject,
	];

	$http
		.get('/api/weather/current/' + latlng)
		.then(function(response) {
			console.log('current data: ')
			console.log((response.data));
			const currentRes = response.data;
			vm.locasList[1].current = currentRes;
		},console.log('NOT SO FAST PLAYBOY'));

	$http
		.get('/api/weather/fourday/' + latlng)
		.then(function(response) {
			const fourDayRes = response.data;
			vm.locasList[1].fourDay = fourDayRes;
			console.log("four day is: ", response);
		});

	$http
		.get('/api/weather/astronomy/' + latlng)
		.then(function(response) {
			const astronomyRes = response.data;
			vm.locasList[1].astronomy = astronomyRes;
			console.log("astronomy is: ", response);

		});
}