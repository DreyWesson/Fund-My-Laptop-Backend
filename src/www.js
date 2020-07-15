const { createServer } = require('http');
require('dotenv').config();
const app = require('../server');
const log = require('./utils/logger');

const PORT = process.env.PORT || 3000;

const server = createServer(app);

server.listen(PORT, () => {
  log(`Serving at http://localhost:${PORT} for ${process.env.NODE_ENV}`);
});

module.exports = server;
