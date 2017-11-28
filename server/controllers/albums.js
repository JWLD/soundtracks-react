const connPool = require('../db_connect.js');
const dbQueries = require('../db_queries.js');
const parallel = require('../helpers/parallel.js');

module.exports = (req, res) => {
  const getAlbums = (callback) => {
    dbQueries.getAlbums(connPool, req.query.q, (err, dbRes) => {
      if (err) return callback(err);
      return callback(null, dbRes.rows);
    });
  };

  const getArtistName = (callback) => {
    dbQueries.getArtistName(connPool, req.query.q, (err, dbRes) => {
      if (err) return callback(err);
      return callback(null, dbRes.rows[0].name);
    });
  };

  parallel([
    getAlbums,
    getArtistName
  ], (err, result) => {
    if (err) return res.status(500).send(err);

    return res.send({
      albums: result[0],
      artist: result[1]
    });
  })
};
