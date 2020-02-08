var express = require('express');
var router = express.Router();

var users = ['jktest', 'jktest2', 'jktest3'];

// Home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CSC375 / SER300 Collaborative Web App', users: users });
});

// Init router for each user
users.forEach(function (username) {
  require('./users/' + username)(router, username);
});

module.exports = router;
