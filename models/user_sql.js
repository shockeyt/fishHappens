var Sequelize = require('sequelize');
var bcrypt = require('bcryptjs');

var sequelize = new Sequelize('postgres://'+process.env.USERNAME+'@localhost:5432/satellizer_sequelize');

var User = sequelize.define('user', {
  displayName: Sequelize.STRING,
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING
}, {
  instanceMethods: {
    comparePassword: function(password) {
      return bcrypt.compareSync(password, this.password);
    }
  }  
});


User.sync({force: true});

User.beforeCreate(function(user, options) {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
});

module.exports = User;