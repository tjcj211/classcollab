module.exports = function(router, username) {

    router.get('/' + username, function(req, res, next) {
        res.render(
            username + '/base',
            {
                title: username + '\'s Special Page',
                username: username

            });
    });

    router.get('/rhanif/aboutme', function(req, res, next) {
        res.render(
            username + '/aboutme',
            {
                title: 'About Me:',
                username: username
            });
    });

    // Set up additional routes here
};