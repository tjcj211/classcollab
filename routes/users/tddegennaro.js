module.exports = function(router, username) {
  router.get('/' + username, function(req, res, next) {
    res.render(
      username + '/base', 
      {
         title: username + '\'s 🏡',
         username: username
      });
  });

  router.get('/' + username + '/pageone', function(req, res, next) {
    res.render(
      username + '/pageone', 
      {
         title: username + ' | 📱 ',
         username: username
      });
  });

  router.get('/' + username + '/pagetwo', function(req, res, next) {
    res.render(
      username + '/pagetwo', 
      {
         title: username + ' | 🎮 ',
         username: username
      });
  });

};