const JsonWebToken = require('jsonwebtoken');
const Querystring = require('querystring');
const Request = require('request');

const authController = module.exports = {};

// GET LOGIN - REDIRECT TO SPOTIFY AUTH PAGE
authController.login = (req, res) => {
	const referer = req.headers.host === 'localhost:8080'
		? 'http://localhost:8080'
		: 'https://soundtracks-data.herokuapp.com';

  const queries = Querystring.stringify({
    client_id: process.env.SPOTIFY_ID,
    response_type: 'code',
    redirect_uri: `${referer}/api/redirect`
  });

  return res.redirect(`https://accounts.spotify.com/authorize?${queries}`);
};

// GET REDIRECT - POST REQUEST TO SPOTIFY FOR ACCESS TOKEN
authController.redirect = (req, res) => {
	const referer = req.headers.host === 'localhost:8080'
		? 'http://localhost:8080'
		: 'https://soundtracks-data.herokuapp.com';

  const data = {
    grant_type: 'authorization_code',
    code: req.query.code,
    redirect_uri: `${referer}/api/redirect`,
    client_id: process.env.SPOTIFY_ID,
    client_secret: process.env.SPOTIFY_SECRET
  };

  const options = {
    method: 'POST',
    url: 'https://accounts.spotify.com/api/token',
    json: true,
    form: data
  };

  Request(options, (error, response, body) => {
    if (error) return res.status(500).send(`Error requesting access token from Spotify: ${error}`);

		const destination = req.headers.host === 'localhost:8080'
			? 'http://localhost:8080/add'
			: 'https://soundtracks-data.herokuapp.com/add';

    // create JWT and return as cookie
    const token = JsonWebToken.sign(body, process.env.SECRET);
    res.cookie('jwt', token, { maxAge: 1000 * 60 * 60 * 24 * 7 }); // 1 week
    res.redirect(destination);
  });
};
