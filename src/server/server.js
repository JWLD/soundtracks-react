const Express = require('express');
const BodyParser = require('body-parser');
const CookieParser = require('cookie-parser');
const Path = require('path');
const router = require('./controllers/router.js');

const app = Express();

app.set('port', process.env.PORT || 8070);

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(CookieParser());

app.use('/api', router);

app.use(Express.static('public'));

app.get('*', (req, res) => {
	res.sendFile(Path.join(__dirname, '../../public/index.html'));
});

module.exports = app;
