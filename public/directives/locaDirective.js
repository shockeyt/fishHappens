angular.module('fishHappensApp')
	.directive('loca', loca);

function loca() {
	let directive = {
		restrict: 'E',
		replace: true,
		templateUrl: 'templates/locaDirective.html',
		scope: {
			location: '=',
			// id: '@',
			// citystate: '@',
			// elevation: '@',
			// feelslike: '@',
			// currenticon: '@',
			// pressure: '@',
			// pressuretrend: '@',
			// currenttemp: '@',
			// currentcondition: '@',
			// currentwinddir: '@',
			// currentwindmph: '@',
		}
	};
	return directive;
}
