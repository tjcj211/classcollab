module.exports = function(router, username) {
  router.get('/' + username, function(req, res, next) {
    res.render(
      username + '/base', 
      {
         title: 'A Little About Megan (mforster)',
         username: username
      });
  });

    router.get('/' + username+'/page2', function(req, res, next) {
        res.render(
            username + '/page2',
            {
                title: "The Wonderful World of Yarn Craft",
                username: username
            });
    });

    router.get('/' + username+ '/page3', function(req, res, next) {
        res.render(
            username + '/page3',
            {
                title: "My Future Zoo...",
                username: username
            });
    });

  // Set up additional routes here
};