module.exports = function (router, username) {
  router.get('/' + username, function (req, res, next) {
    res.render(
      username + '/base', {
        title: username + '\'s Special Page',
        username: username
      });
  });

  // Set up additional routes here
  router.get('/jeduffy/mypage', function (req, res, next) {
    res.render(
      username + '/mypage', {
        title: username + '\'s personal page',
        username: username
      });
  });
};