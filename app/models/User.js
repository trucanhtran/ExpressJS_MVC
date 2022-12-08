// const sql = require('../../config/db');
const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');

const sequelize = new Sequelize('iscfproject_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = sequelize.define('users', {
  login: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstname: {
    type: DataTypes.STRING,
  },
  lastname: {
    type: DataTypes.STRING,
  },
  createdAt: {
    field: 'created_on',
    type: Sequelize.DATE,
  },
  updatedAt: {
    field: 'updated_on',
    type: Sequelize.DATE,
  },
});

function getAllUsers() {
  User.findAll({ limit: 5 })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error('Failed to retrieve data : ', error);
    });
}

module.exports = User;
