module.exports = function(router, username) {
  router.get('/' + username, function(req, res, next) {
    res.render(
      username + '/base', 
      {
         title: username + '\'s Main Page',
         username: username
      });
  });

  // Set up additional routes here
  router.get('/tjcarta/linkedin', function(req, res, next) {
    res.render(
      username + '/linkedin', 
      {
         title: username + '\'s LinkedIn',
         username: username
      });
  });
};