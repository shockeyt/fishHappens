angular.module('fishHappensApp')
	.controller('SpotController', SpotController);


SpotController.$inject = ['$http'];
function SpotController ($http) {
	let vm = this;
	console.log("spot controller working");
	vm.locations = {};
	vm.saveSpots = [];
	vm.getSpots = {};


	vm.loca = [{
		id: "Secret Id",
		current: {},
		fourDay: [],
		astronomy: {},
		moonData: {},
		currentFlow: {},
		pastWeekFlow: {},
	}];

	// vm.locasList = [
	// 	// {
	// 	// 	name: 'Nepal',
	// 	// 	elevation: '6,678\'',
	// 	// 	temp: 99,
	// 	// 	current: {
	// 	// 		temp: 'TEST locaObject',
	// 	// 	},
	// 	// 	fourDay: [{
	// 	// 		high: "67",
	// 	// 	},
	// 	// 	{
	// 	// 		high: "88",
	// 	// 	}],
	// 	// 	moon: {
	// 	// 		moonrise: '5:45',
	// 	// 	}
	// 	// },
	// 	locaObject,
	// ];



	$http
	.get('/api/location')
	.then(function (response) {
		console.log(response);
		vm.locations = response.data;
		vm.locations.forEach(function(spots) {
			//vm.saveSpots.push(spots);
			//console.log(spots.coordinates);
			//currentWeather(spots);
		});
	});


	function currentWeather(spots){
		console.log("SPOTS.COORDINATES");
		console.log(spots.coordinates);
		
       	$http
		.get('/api/weather/current/' + spots.coordinates)
		.then(function(response) {
			//console.log("am i working still?");
			console.log("current days from db are: ", response);
			vm.loca.current = response.data;
			//vm.locasList[0].current = response.data;

		},console.log("ERROR"));
	}


	vm.getData = getData;
	function getData(places){
		console.log("data button clicked");
		console.log(places);
		currentWeather(places);
	}

	vm.deleteLocation = deleteLocation;
	function deleteLocation(places){
		console.log("deletebutton clicked");
		console.log(places.id);
		//var index = vm.locations.indexOf(places);
		// console.log(index);
		// vm.locations.splice(index, 1);
		$http
		.delete('/api/location/' + places.id)
		.then(function(response) {
			var index = vm.locations.indexOf(places);
			console.log(index);
			vm.locations.splice(index, 1);
		});
	}

}//close SpotController