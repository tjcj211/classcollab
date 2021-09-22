module.exports = function (router, username) {
  router.get("/" + username, function (req, res, next) {
    res.render(username + "/base", {
      title: username + "'s Special Page",
      username: username,
    });
  });

  // Set up additional routes here

  router.get("/rmhayes/anotherpage", function (req, res, next) {
    res.render(username + "/anotherpage", {
      title: "Another Page for rmhayes",
      username: username,
    });
  });
};
