const express = require('express');

const router = require('./controllers/router.js');

const app = express();

app.use(router);

module.exports = app;
