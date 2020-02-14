module.exports = function(router, username) {
    router.get('/' + username, function(req, res, next) {
        res.render(username + '/base');
    });

    // Set up additional routes here

    router.get('/' + username + '/woah', (req, res, next) => {
        res.render(username + '/woah');
    });
};
