module.exports = function(router, username) {
  router.get('/' + username, function(req, res, next) {
    res.render(
      username + '/base', 
      {
         title: 'Stephen Ippolito\'s Main Page',
         username: username
      });
  });

  router.get('/' + username + '/second', function(req, res, next) {
    res.render(
      username + '/second', 
      {
         title: 'About Stephen Ippolito',
         username: username
      });
  });

  router.get('/' + username + '/third', function(req, res, next) {
    res.render(
      username + '/third',
    {
      title: 'A Photo of a Squirrel',
      username: username
    });
  });

  // Set up additional routes here
};
