const { createServer } = require('http');
require('dotenv').config();
const app = require('../server');
const sequelize = require('../config/db');
const logger = require('../utils/logger');

const PORT = process.env.PORT || 3000;

const server = createServer(app);

server.listen(PORT, async () => {
  logger.log(`Serving at http://localhost:${PORT} for ${process.env.NODE_ENV}`);
  await sequelize.authenticate();
  await sequelize.sync({ force: true });
  logger.log('Connection to database established successfully');
});

module.exports = server;
