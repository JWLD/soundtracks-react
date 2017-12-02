const dbQueries = require('../dbQueries');
const connPool = require('../dbConnect');

module.exports = (req, res, next) => {
	dbQueries.getAlbumIds(connPool, req.query.artistId, (err, result) => {
		if (err) return res.status(500).send(`Error querying DB for album IDs: ${err}`);

		res.locals.albumIds = result.rows.map(row => row.spotify_id);

		next();
	});
};
