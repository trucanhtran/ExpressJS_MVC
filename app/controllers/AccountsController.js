const User = require('../models/User');

class AccountsController {
  // [GET] /accounts
  accounts(req, res) {
    // User.getAllUsers({}, function (err, users) {
    //   if (!err) {
    //     return res.json(users);
    //   } else {
    //     return res.json({ error: err });
    //   }
    // });

    User.findAll({ limit: 5 })
      .then((data) => {
        return res.json(data);
      })
      .catch((error) => {
        return res.json({ error: error });
      });
  }
}

module.exports = new AccountsController();
