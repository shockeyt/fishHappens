
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
	// let latlng = "43.856501,-110.480835";

	console.log("fourday controller is working");
//**********************************//
//***VARIABLES FOR HTTP REQUESTS****//

let fullCoordinates;	
let fishSpot;


//************************//
//***HTTP CALLS HERE******//

//WEATHER CALLS
	function currentWeather(){
       	$http
		.get('/api/weather/current/' + fullCoordinates)
		.then(function(response) {
			console.log("am i working still?");
			console.log("current day is: ", response);

		});
	}
	
	function fourDayWeather(){
		$http
		.get('/api/weather/fourday/' + fullCoordinates)
		.then(function(response) {
			console.log("am i working still?");
			console.log("four day is: ", response);

		});
	}

	function astronomyWeather(){
		$http
		.get('/api/weather/astronomy/' + fullCoordinates)
		.then(function(response) {
			console.log("am i working still?");
			console.log("astronomy is: ", response);

		});
	}

	function moonData(){
		$http
		.get('/api/weather/mooncast/' + fullCoordinates)
		.then(function(response) {
			console.log("am i working still?");
			console.log("mooncast is: ", response);

		});
	}

//STREAM CALLS

	function currentFlowCall(){
        $http
        .post('/fishspots', fishSpot)
        .then(function(response) {
          	console.log(response.data);
        });
	}

    function pastWeekFlow(){
        $http
        .post('/fishweek', fishSpot)
        .then(function(response){
            console.log(response.data);
        });
    }
        


	window.initMap = function(){
	    // used to hold all of the markers
	    let markerArray = [];
	    
	    //**preloaded spots when the page loads**
	    let denver = {lat: 39.7392, lng: -104.9903};
	   
	   // This is the actual map we are working off of //
	    let map = new google.maps.Map(document.getElementById('map'), {
	      zoom: 10,
	      center: denver
	    });

	    let thisWindow = new google.maps.InfoWindow({
      		content: 'Fishing Spot'
     	});

	    // Event listener for map, makes a new spot on click
	    map.addListener('click', function(e) {
	          placeMarkerAndPanTo(e.latLng, map);
	          });
   
     

	// Creates a new marker and saves it to the Marker Array //
	function placeMarkerAndPanTo(latLng, map) {
      	let fishMarker = new google.maps.Marker({
        	position: latLng,
        	map: map
    });
    markerArray.push(fishMarker);




    //**Custom info window for making new spot**
    let newSpotForm = new google.maps.InfoWindow({
        content: "<form>" +
                  "Spot Name:" + "<br>" +
                  "<input type='text' id='spotName' name='spotName' placeholder=''>" +
                  "<br>" +
                  "<button id='oneWeek'>One Week</button>" +
                  "<input type='submit' id='submit' value='submit'>" + "<br><br>" +
                  "</form>"
      
    });

    //**Opens new-spot form so that data can be pulled from form**
    newSpotForm.open(map, fishMarker);

 
    fishSpot = {
        lat: fishMarker.position.lat(),
        lng: fishMarker.position.lng()
    };
       
	fullCoordinates = (fishSpot.lat + ',' + fishSpot.lng);
	   console.log(fullCoordinates);

	
	//CLICK CALLS*********   
	   currentWeather();
	   fourDayWeather();
	   astronomyWeather();
	   moonData();
	   currentFlowCall();
	   pastWeekFlow();
	//*********************

	}//close place marker

	};//close initmap
	window.initMap();	

	
}//close weather WeatherController
