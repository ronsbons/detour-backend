const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

// get all tours
router.get('/', controllers.tours.show);
// get one tour by its id
router.get('/:id', controllers.tours.showOne);
// get tours by its primary country id
router.get('/country/:country_id', controllers.tours.showByCountry);

module.exports = router;