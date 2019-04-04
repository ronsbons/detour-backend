const express = require('express');
const router = express.Router();

const controllers = require('../controllers');

// add a review
router.post('/', controllers.reviews.add);
// get reviews by country id
router.get('/country/:country_id', controllers.reviews.showReviewsByCountry);
// get single review
router.get('/:id', controllers.reviews.showOne);

// admin routes
// get all reviews
router.get('/', controllers.reviews.showAllReviews);


module.exports = router;