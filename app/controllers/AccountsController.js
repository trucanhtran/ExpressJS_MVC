class AccountsController {

    // [GET] /accounts
    accounts (req, res) {
        res.render('index', { title: 'Hello' });
    }
}

module.exports = new AccountsController;