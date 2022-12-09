class SiteController {
  // [GET] /
  index(req, res) {
    res.render('index.ejs', { title: 'Home' });
  }
}

module.exports = new SiteController();
