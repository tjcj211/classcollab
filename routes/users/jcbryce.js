module.exports = function(router, username) {
  router.get('/' + username, function(req, res, next) {
    res.render(
      username + '/base', 
      {
         title: 'Jonathan C. Bryce',
         username: username
      });
  });

  router.get('/' + username + "/second", function(req, res, next) {
    res.render(
      username + '/second', 
      {
         title: 'Jonathan C. Bryce',
         username: username
      });
  });

  // Set up additional routes here
};