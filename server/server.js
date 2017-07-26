const express = require('express');

const router = require('./routes/router.js');

const app = express();

app.use('/api', router);

module.exports = app;
