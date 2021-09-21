module.exports = function(router, username) {
  router.get('/' + username, function(req, res, next) {
    res.render(
      username + '/base', 
      {
         title: username + '\'s Special Page',
         username: username
      });
  });

  router.get('/hadewhurst/secondPage', function(req,res,next){
    res.render(
      username + '/secondPage',
      {
        title: username + '\'s Second Page',
        username: username
      });
    });
};