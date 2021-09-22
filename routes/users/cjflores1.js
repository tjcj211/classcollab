module.exports = function(router, username) {
  router.get('/' + username, function(req, res, next) {
    res.render(
      username + '/base', 
      {
         title: username + '\'s Special Page',
         username: username
      });
  });

  router.get('/cjflores1/another', function(req, res, next) {
    res.render(
      username + '/another',
    {
      title: username + '\'s Second Page',
      username: username
    });
  });

  router.get('/cjflores1/yetanother', function(req, res, next) {
    res.render(
      username + '/yetanother',
    {
      title: username + '\'s Third Page',
      username: username
    });
  });

  // Set up additional routes here
};