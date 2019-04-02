const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

// get all countries
router.get('/', controllers.country.show);
// get one country by its id
router.get('/:id', controllers.country.showOne);
// get countries by region id
router.get('/region/:region_id', controllers.country.showByRegion);

module.exports = router;