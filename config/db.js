const { Sequelize } = require('sequelize');
const config = require('./config.json');
require('dotenv').config();

const { NODE_ENV } = process.env;

const db = config[NODE_ENV];

let sequelize;

if (NODE_ENV === 'production') {
  sequelize = new Sequelize(db.url);
} else {
  sequelize = new Sequelize(db.database, db.username, db.password, {
    dialect: 'postgres',
    host: 'localhost',
  });
}

module.exports = sequelize;
