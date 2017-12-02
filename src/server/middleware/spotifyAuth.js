const JsonWebToken = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if (!req.cookies.jwt) return res.status(401).send('Missing access token');

  const decoded = JsonWebToken.verify(req.cookies.jwt, process.env.SECRET);
  res.locals.token = decoded.access_token;

  next();
}
