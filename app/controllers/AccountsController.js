const User = require('../models/User');

class AccountsController {
  // [GET] /accounts
  accounts(req, res) {
    User.getAll({}, function (err, users) {
      if (!err) {
        res.json(users);
      }
    });
    // res.render('index', { title: 'Hello' });
  }
}

module.exports = new AccountsController();
