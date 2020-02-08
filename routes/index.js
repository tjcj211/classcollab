var express = require('express');
var router = express.Router();

var users = ['jktest', 'jktest2'];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', users: users });
});

// Init router for each user
users.forEach(function (username) {
  require('./users/' + username)(router, username);
});

module.exports = router;
