class SiteController {

    // [GET] /
    index (req, res) {
        res.render('index', { title: 'Home' });
    }
}

module.exports = new SiteController;