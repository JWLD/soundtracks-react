const connPool = require('../dbConnect');
const dbQueries = require('../dbQueries');
const { parallel } = require('async');

const dbController = module.exports = {};

// GET DB-ARTISTS - GET ALL ARTISTS FROM DB
dbController.getAllArtists = (req, res) => {
  dbQueries.getAllArtists(connPool, (err, dbRes) => {
    if (err) return res.status(500).send(err);
    res.send(dbRes.rows)
  });
};

// GET DB-ALBUMS - GET ALL ALBUMS BY SPECIFIC ARTIST FROM DB
dbController.getAlbumsByArtist = (req, res) => {
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

// POST DB-ARTISTS - ADD NEW ARTIST TO DB
dbController.addArtist = (req, res) => {
  dbQueries.addArtist(connPool, req.body, (err, result) => {
    if (err) return res.status(500).send(`Error adding artist to DB: ${err}`);

    return res.status(201).send('New artist added to DB');
  });
};

// POST DB-ALBUMS - ADD NEW ALBUM TO DB
dbController.addAlbum = (req, res) => {
	const addAlbumArtist = (callback) => {
		dbQueries.addAlbumArtist(connPool, req.body, (err, result) => {
			if (err) return callback(err);
			return callback(null, result);
		});
	};

	const addAlbum = (callback) => {
		dbQueries.addAlbum(connPool, req.body, (err, result) => {
			if (err) return callback(err);
			return callback(null, result);
		});
	};

	parallel([
		addAlbumArtist,
		addAlbum
	], (err, result) => {
		if (err) return res.status(500).send(`Error adding album to DB: ${err}`);

		return res.status(201).send('New album added to DB');
	});
};

// DELETE DB-ALBUMS - DELETE ALBUM FROM DB
dbController.deleteAlbum = (req, res) => {
	const deleteAlbumArtist = (callback) => {
		dbQueries.deleteAlbumArtist(connPool, req.query.album_id, (err, result) => {
			if (err) return callback(err);
			return callback(null, result);
		});
	};

	const deleteAlbum = (callback) => {
		dbQueries.deleteAlbum(connPool, req.query.album_id, (err, result) => {
			if (err) return callback(err);
			return callback(null, result);
		});
	};

	parallel([
		deleteAlbumArtist,
		deleteAlbum
	], (err, result) => {
		if (err) return res.status(500).send(`Error deleting album from DB: ${err}`);

		return res.status(201).send('Album deleted from DB');
	});
};
