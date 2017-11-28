const dbQueries = {};

dbQueries.getAllArtists = (connPool, callback) => {
  connPool.query(
    'SELECT * FROM artists ORDER BY name ASC',
    callback
  );
};

dbQueries.getAlbums = (connPool, artistId, callback) => {
  connPool.query(
    'SELECT * FROM albums WHERE spotify_id IN (SELECT album_id FROM albums_artists WHERE artist_id = $1) ORDER BY year DESC, title',
    [artistId],
    callback
  );
};

dbQueries.getArtistName = (connPool, artistId, callback) => {
  connPool.query(
    'SELECT name FROM artists WHERE spotify_id = $1',
    [artistId],
    callback
  );
};

module.exports = dbQueries;
