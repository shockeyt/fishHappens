angular.module('fishHappensApp', 
    [
      'ui.router',
      'satellizer'
    ])
  .config(configRoutes);


////////////
// ROUTES //
////////////

configRoutes.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"]; // minification protection
function configRoutes($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  // for any unmatched URL redirect to /
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/signup.html',
      controller: 'SignupController',
      controllerAs: 'sc',
      resolve: {
        skipIfLoggedIn: skipIfLoggedIn
      }
    })
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginController',
      controllerAs: 'lc',
      resolve: {
        skipIfLoggedIn: skipIfLoggedIn
      }
    })
    .state('logout', {
      url: '/logout',
      template: null,
      controller: 'LogoutController',
      resolve: {
        loginRequired: loginRequired
      }
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'templates/profile.html',
      controller: 'ProfileController',
      controllerAs: 'profile',
      resolve: {
        loginRequired: loginRequired
      }
    });
    

    function skipIfLoggedIn($q, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.reject();
      } else {
        deferred.resolve();
      }
      return deferred.promise;
    }

    function loginRequired($q, $location, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.resolve();
      } else {
        $location.path('/login');
      }
      return deferred.promise;
    }
}

// var ctx = document.getElementById("myChart");
// let myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Yesterday", "Current"],
//         datasets: [{
//             label: 'Past 7 days',
//             data: [12, 19.2, 3, 5, 2, 3],
//             backgroundColor: 'rgba(255, 99, 132, 0.2)',
//             borderColor: [
//                 'rgba(255,99,132,1)',
//             ],
//             borderWidth: 1
//         },
//             {label: 'temerature',
//             data: [2, 4, 19, 5, 17, 3],
//             backgroundColor: [
//                 'rgba(153, 102, 255, 0.2)',
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//             ],
//             borderWidth: 1
//         },

//         ]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });

