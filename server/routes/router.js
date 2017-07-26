const router = require('express').Router();

router.get('/artists', require('./artists.js'));
router.get('/albums', require('./albums.js'));

module.exports = router;
