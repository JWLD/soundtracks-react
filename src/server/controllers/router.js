const Router = require('express').Router();

// middleware
const spotifyAuth = require('../middleware/spotifyAuth');
const getDBAlbumIds = require('../middleware/getAlbumIds');
const checkExists = require('../middleware/checkExists');

// controllers
const authController = require('./auth');
const spotifyController = require('./spotify');
const dbController = require('./database');

// AUTH
Router.get('/login', authController.login);
Router.get('/redirect', authController.redirect);

// SPOTIFY
Router.get('/sp-artists', spotifyAuth, spotifyController.artists);
Router.get('/sp-albums', spotifyAuth, getDBAlbumIds, spotifyController.albums);
Router.get('/sp-album-date', spotifyAuth, spotifyController.albumDate);

// DATABASE
Router.get('/db-artists', dbController.getAllArtists);
Router.get('/db-albums', dbController.getAlbumsByArtist);
Router.post('/db-artists', checkExists.artist, dbController.addArtist);
Router.post('/db-albums', checkExists.albumArtist, checkExists.album, dbController.addAlbum);
Router.delete('/db-albums', dbController.deleteAlbum);

module.exports = Router;
