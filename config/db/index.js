const mysql = require('mysql');
const Sequelize = require('sequelize');

//local
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'iscfproject_db',
// });

const sequelize = new Sequelize('iscfproject_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connect db Successfully');
  } catch (er) {
    console.log('Connection db Failed');
  }
}

module.exports = { connect };
