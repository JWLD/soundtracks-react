const express = require('express');
const path = require('path');

const router = require('./controllers/router.js');

const app = express();

app.set('port', process.env.PORT || 9000);

app.use('/api', router);

app.use(express.static('public'));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = app;
