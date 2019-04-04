const express = require('express');
const router = express.Router();

const controllers = require('../controllers');

// add a review
router.post('/', controllers.reviews.add);

// admin routes
// get all reviews
router.get('/', controllers.reviews.showAllReviews);


module.exports = router;