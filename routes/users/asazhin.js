module.exports = function(router, username) {
  router.get('/' + username, function(req, res, next) {
    res.render(
      username + '/base', 
      {
         title: username + '\'s Special Page',
         username: username
      });
  });

  // Set up additional routes here
  router.get('/asazhin/page2', function(req, res, next) {
    res.render(
      username + '/page2', 
      {
         title: username + '\'s Second Page',
         username: username
      });
  });

};