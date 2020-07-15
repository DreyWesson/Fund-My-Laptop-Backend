const express = require('express');

const app = express();

app.get('/', (res) => res.send('Setup!'));

module.exports = app;
