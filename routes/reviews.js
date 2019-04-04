const express = require('express');
const router = express.Router();

const controllers = require('../controllers');

// add a review
router.post('/', controllers.reviews.add);


module.exports = router;