
module.exports = function(router, username) {
  router.get('/' + username, function(req, res, next) {
    res.render(
      username + '/base', 
      {
         title: 'Welcome to amanda\'s page!',
         username: username
      });
  });

  router.get('/ajetienne/another', function(reg,res,next) {
    res.render(
      username + '/another',
      {
        title:username + '\'s second page',
        username:username
      });
  });


  // Set up additional routes here
}; 
