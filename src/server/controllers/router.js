const Router = require('express').Router();

// middleware
const spotifyAuth = require('../middleware/spotifyAuth');
const getDBAlbumIds = require('../middleware/getDBAlbumIds');
const checkExists = require('../middleware/checkExists');

// controllers
const authController = require('./auth');
const spotifyController = require('./spotify');
const dbController = require('./database');

// AUTH
Router.route('/login')
	.get(authController.login);
Router.route('/redirect')
	.get(authController.redirect);

// SPOTIFY
Router.route('/sp-artists')
	.get(spotifyAuth, spotifyController.artists)
Router.route('/sp-albums')
	.get(spotifyAuth, getDBAlbumIds, spotifyController.albums)
Router.route('/sp-album-date')
 	.get(spotifyAuth, spotifyController.albumDate);

// DATABASE
Router.route('/db-artists')
 	.get(dbController.getAllArtists)
	.post(checkExists.artist, dbController.addArtist);
Router.route('/db-albums')
 	.get(dbController.getAlbumsByArtist)
	.post(checkExists.albumArtist, checkExists.album, dbController.addAlbum)
	.delete(dbController.deleteAlbum);

module.exports = Router;
