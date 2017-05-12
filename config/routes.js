var express = require('express'),
	router = express.Router(),
	bodyParser = require('body-parser'),
	auth = require('../resources/auth');

//CONTROLLERS
var usersController = require('../controllers/users');
var weatherController = require('../controllers/weatherBack');


// SQL API Routes
router.route('/api/me')
  .get(auth.ensureAuthenticated, usersController.apiGet);

router.route('/api/me')
  .put(auth.ensureAuthenticated, usersController.apiPut);

// SQL Auth Routes
router.route('/auth/signup')
  .post(usersController.authSignup);

router.route('/auth/login')
  .post(usersController.authLogin);

//HARDCODED POST ROUTE
router.route('/api/posts')
  .get(usersController.postTest);

//WEATHER ROUTES
router.route('/api/weather/current/:id')
	.get(weatherController.getCurrentDay);

router.route('/api/weather/fourday/:id')
	.get(weatherController.getFourDay);

router.route('/api/weather/astronomy/:id')
	.get(weatherController.getAstronomy);
	
//USER DATA
router.route('/user/data')
	.get(auth.ensureAuthenticated, usersController.saveSpots);


module.exports = router;
