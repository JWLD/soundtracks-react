const express = require('express');
const path = require('path');

const router = require('./controllers/router.js');

const app = express();

app.set('port', process.env.PORT || 9000);

// API routes
app.use('/api', router);

// serve static files
app.use(express.static('public'));

// serve React app via index.html
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = app;
