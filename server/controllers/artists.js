const connPool = require('../db_connect.js');
const dbQueries = require('../db_queries.js');

module.exports = (req, res) => {
  dbQueries.searchArtists(connPool, req.query.q, (err, dbRes) => {
    if (err) return res.send(err);
    res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.send(dbRes.rows)
  });
};
