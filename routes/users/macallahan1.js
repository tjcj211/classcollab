module.exports = function (router, username)
{
  router.get('/' + username, function (req, res, next)
  {
    res.render(
      username + '/base', 
      {
         title: 'Ruby Rose',
         username: username
      });
  });

    // Set up additional routes here
  router.get('/' + username + '/weissschnee', function (req, res, next)
  {
      res.render(
        username + '/weissschnee',
        {
            title: 'Weiss Schnee',
            username: username
        });
  });
  
  router.get('/' + username + '/blakebelladonna', function (req, res, next)
  {
      res.render(
        username + '/blakebelladonna',
        {
            title: 'Blake Belladonna',
            username: username
        });
  });

  router.get('/' + username + '/yangxiaolong', function (req, res, next)
  {
      res.render(
        username + '/yangxiaolong',
        {
            title: 'Yang Xiao Long',
            username: username
        });
  });

};