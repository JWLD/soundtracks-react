const connPool = require('../db_connect.js');
const dbQueries = require('../db_queries.js');

module.exports = (req, res) => {
  dbQueries.getAllArtists(connPool, (err, dbRes) => {
    if (err) return res.status(500).send(err);
    res.send(dbRes.rows)
  });
};
