module.exports = function(router, username) {
  router.get('/' + username, function(req, res, next) {
    res.render(
      username + '/base',
      {
         title: username + '\'s Main Page',
         username: username
      });
  });

    router.get('/cacooper/bio', function(req, res, next) {
      res.render(
        username + '/bio',
        {
           title: username + '\'s Bio',
           username: username
        });
    });

  // Set up additional routes here
};
