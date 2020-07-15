const express = require('express');
const cors = require('cors');
const logger = require('./src/utils/logger');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (res) => res.send('Setup!'));

// Server Error handler
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  logger.error(err);
  res.status(500).send('Something went wrong');
});

module.exports = app;
