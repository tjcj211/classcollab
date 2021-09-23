module.exports = function(router, username) {
  router.get('/' + username, function(req, res, next) {
    res.render(
      username + '/base',
      {
         title: username + '\'s Crucial Page',
         username: username
      });
  });
  // Set up additional routes here
  router.get('/dnirwin/usefulinfo', function(req, res, next) {
    res.render(
      username + '/usefulinfo',
      {
         title: username + '\'s Information',
         username: username
      });
  });
};
