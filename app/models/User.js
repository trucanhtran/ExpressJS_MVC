const sql = require('../../config/db');

const User = function (user) {
  this.login = user.login;
  this.firstname = user.firstname;
  this.lastname = user.lastname;
};

module.exports = User;
