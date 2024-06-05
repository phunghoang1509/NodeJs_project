class NewsControllers {
  //[Get] /news
  index(req, res) {
    res.render("news");
  }
  //[Get] /:slug
  detail(req, res) {
    res.send("NEWS DETAIL");
  }
}
module.exports = new NewsControllers();
