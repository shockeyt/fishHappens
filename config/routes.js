var express = require('express'),
	router = express.Router(),
	bodyParser = require('body-parser'),
	auth = require('../resources/auth');

//CONTROLLERS
var usersController = require('../controllers/users');


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



module.exports = router;
