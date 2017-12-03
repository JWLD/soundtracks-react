const dbQueries = require('../dbQueries');
const connPool = require('../dbConnect');

const checkExists = module.exports = {};

checkExists.artist = (req, res, next) => {
	dbQueries.checkArtist(connPool, req.body.id, (err, result) => {
    if (err) return res.status(500).send(`Error checking DB for artist: ${err}`);

    if (result.rows[0].exists) return res.send('Artist already exists in DB');

    next();
  });
};

checkExists.album = (req, res, next) => {
	dbQueries.checkAlbum(connPool, req.body.album_id, (err, result) => {
    if (err) return res.status(500).send(`Error checking DB for album: ${err}`);

    if (result.rows[0].exists) return res.send('Album exists but new artist linked in DB');

    next();
  });
};

checkExists.albumArtist = (req, res, next) => {
	dbQueries.checkAlbumArtist(connPool, req.body, (err, result) => {
    if (err) return res.status(500).send(`Error checking DB for album-artist: ${err}`);

    if (result.rows[0].exists) return res.send('Album exists and artist already linked in DB');

    next();
  });
};
