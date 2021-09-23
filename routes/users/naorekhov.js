module.exports = function(router, username) {
  router.get('/' + username, function(req, res, next) {
    res.render(
      username + '/base', 
      {
         title: username + '\'s First Page',
         username: username
      });
  });

  router.get('/naorekhov/second', function(req, res, next) {
    res.render(
      username + '/second',
    {
      title: username + '\'s Second Page',
      username: username
    });

  });

  // Set up additional routes here
};