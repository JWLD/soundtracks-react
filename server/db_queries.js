const dbQueries = {};

dbQueries.getAllArtists = (connPool, callback) => {
  connPool.query(
    'SELECT * FROM artists ORDER BY name ASC',
    callback
  );
};

dbQueries.getAlbums = (connPool, artistId, callback) => {
  connPool.query(
    'SELECT * FROM albums WHERE artist_id = $1 AND skipped = false ORDER BY year',
    [artistId],
    callback
  );
};

dbQueries.getArtistName = (connPool, artistId, callback) => {
  connPool.query(
    'SELECT name FROM artists WHERE discogs_id = $1',
    [artistId],
    callback
  );
};

module.exports = dbQueries;
