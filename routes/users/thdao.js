module.exports = function(router, username) {
  router.get('/' + username, function(req, res, next) {
    res.render(
      username + '/base', 
      {
         title: 'Welcome to my Personal Page!',
         username: username
      });
  });

  // Set up additional routes here
  router.get('/thdao/stock', function (req, res, next) {
    res.render(
      username + '/stock',
      {
        title: 'Learn About Stocks!',
        username: username
      });
  });

};