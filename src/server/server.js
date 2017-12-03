const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const router = require('./controllers/router.js');

const app = express();

app.set('port', process.env.PORT || 8070);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', router);

app.use(express.static('public'));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = app;
