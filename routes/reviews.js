const express = require('express');
const router = express.Router();

const controllers = require('../controllers');

// get reviews by country id
router.get('/country/:country_id', controllers.reviews.showReviewsByCountry);


// admin routes
// get all reviews
router.get('/', controllers.reviews.showAllReviews);
// get single review
router.get('/:id', controllers.reviews.showOne);


// user routes
// [] NEED TO BE BEHIND REQUEST TOKEN MIDDLEWARE
// add a review
router.post('/', controllers.reviews.add);
// edit review
router.put('/:id', controllers.reviews.edit);
// delete review
router.delete('/:id', controllers.reviews.delete);
// get reviews by user id
router.get('/user/:user_id', controllers.reviews.showReviewsByUser);



module.exports = router;