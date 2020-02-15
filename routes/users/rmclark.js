module.exports = function(router, username) {
  router.get('/' + username, function(req, res, next) {
    res.render(
      username + '/base', 
      {
         title: 'Ryan Clark' + '\'s Special Page',
         username: username
      });
  });

  router.get('/rmclark/another', function(req, res, next) {
    res.render(
      username + '/another', 
      {
         title: 'Ryan Clark' + '\'s Second Page',
         username: username
      });
  });
  // Set up additional routes here
};