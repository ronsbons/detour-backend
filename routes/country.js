const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

// get countries by region id
router.get('/:region_id', controllers.country.showByRegion);

module.exports = router;