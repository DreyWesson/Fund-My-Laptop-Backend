const express = require('express');

const app = express();
const log = require('./src/utils/logger');

const port = process.env.PORT || 3000;

app.get('/', (res) => res.send('Setup!'));

app.listen(port, () => log('Hello'));
