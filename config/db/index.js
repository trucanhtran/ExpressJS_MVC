const mysql = require('mysql');

//local
const connection = mysql.createConnection({
  host: 'localhost',
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
