angular.module('fishHappensApp')
	.controller('SpotController', SpotController);


SpotController.$inject = ['$http'];
function SpotController ($http) {
	let vm = this;
	console.log("spot controller working");
	vm.locations = {};
	vm.saveSpots = [];

	$http
	.get('/api/location')
	.then(function (response) {
		console.log(response);
		vm.locations = response.data;
		vm.locations.forEach(function(spots) {
			//vm.saveSpots.push(spots);
			//console.log(spots.coordinates);
			currentWeather(spots);
		});
	});

	function currentWeather(spots){
       	$http
		.get('/api/weather/current/' + spots.coordinates)
		.then(function(response) {
			//console.log("am i working still?");
			console.log("current days from db are: ", response);

		});
	}


	vm.testButton = testButton;
	function testButton(){
		console.log("testbutton clicked");
	}

}//close SpotController