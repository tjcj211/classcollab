module.exports = function(router, username) {
  router.get('/' + username, function(req, res, next) {
    res.render(
      username + '/base', 
      {
         title: username + '\'s Special Page',
         username: username
      });
  });

  // Contact page
  router.get('/tacouto/pagetwo', function(req, res, next) {
    res.render(
      username + '/pagetwo', 
      {
         title: username + '\'s Second Page',
         username: username
      });
  });

};

