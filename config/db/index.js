const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'db',
  user: 'user',
  password: 'password',
  database: 'my_db',
});

async function connect() {
  try {
    await connection.connect();
    console.log('Connect db Successfully');
  } catch (er) {
    console.log('Connection db Failed');
  }
}

module.exports = { connect };
