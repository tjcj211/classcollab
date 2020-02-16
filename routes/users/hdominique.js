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


  router.get('/secret', function(req, res, next) {
    res.render(
      username + '/secret',
      {
         title: 'Harrison' + '\'s Secret Page',
         username: username
      });
  });

};
