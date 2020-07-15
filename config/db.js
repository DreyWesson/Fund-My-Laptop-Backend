const { Sequelize } = require('sequelize');
require('dotenv').config();

const {
  DB_NAME, DB_USERNAME, DB_PASSWORD, DB_URL, NODE_ENV,
} = process.env;

let sequelize;

if (NODE_ENV === 'production') {
  sequelize = new Sequelize(DB_URL);
} else {
  sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    dialect: 'mysql',
    host: 'localhost',
  });
}

module.exports = sequelize;
