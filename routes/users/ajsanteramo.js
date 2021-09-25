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
  router.get('/ajsanteramo/hobbies', function(req, res, next) {
    res.render(
      username + '/hobbies',
      {
         title: username + '\'s Hobby Page',
         username: username
      });
  });
};
