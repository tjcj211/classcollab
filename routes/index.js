var express = require('express');
var router = express.Router();

var users = [
  'jktest', 'jktest2',
  //'jcbryce', 'hcbyrd', 'macallahan1', 'rmclark', 'tacouto', 'thdao', 'tddegennaro', 'hdominique', 'jeduffy', 'ajetienne', 'mforster', 'jmgaliano', 'gagreco', 'rhanif', 'jrmannarino', 'amartin1', 'jepassanante', 'rpetrosino', 'asazhin', 'jzemlanicky'
  'laatkinson', 'mbadalamente', 'tjcarta', 'cacooper', 'hadewhurst', 'cjflores1', 'agil', 'rmhayes', 'srippolito', 'dnirwin', 'hketsela', 'amills1', 'naorekhov', 'hrajan', 'ajsanteramo', 'bcsullivan', 'ndvazquez', 'jrwilkinson'
];
users.sort();

// Home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CSC375 / SER300 Collaborative Web App', users: users });
});

// Init router for each user
users.forEach(function (username) {
  require('./users/' + username)(router, username);
});

module.exports = router;
