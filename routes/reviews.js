const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const controllers = require('../controllers');

// get reviews by country id
router.get('/country/:country_id', controllers.reviews.showReviewsByCountry);


// admin routes
// get all reviews
router.get('/', controllers.reviews.showAllReviews);
// get single review
router.get('/:id', controllers.reviews.showOne);


// user routes
// middleware to intercept requests for routes that need jwt token/user auth
router.use( (request, response, next) => {
  console.log(`activating jwt middleware on reviews routes`);
  // access headers from front-end request
  const bearerHeader = request.headers['authorization'];
  console.log(`token check: ${bearerHeader}`);

  // if there is a value in bearerHeader, then...
  if (typeof bearerHeader !== 'undefined') {
    // break up request header 'Bearer ${token}' into 'Bearer' and '${token}'
    const bearer = bearerHeader.split(' ');
    // store just the token part
    const bearerToken = bearer[1];
    // put the token in the request
    request.token = bearerToken;
    // verify token against secret key
    // if secret key is inside the signature part of the token, it will open the payload and have access to the user data that was added to the jwt in userController.js (email, username, _id)
    let verified = jwt.verify(request.token, 'essendon');
    console.log(`here is the verified _id: ${verified._id}`);
    request.userId = verified._id;
    // proceeds to routes after this middleware
    next();
  } else {
    response.sendStatus(403);
  };
});


// add a review
router.post('/', controllers.reviews.add);
// edit review
router.put('/:id', controllers.reviews.edit);
// delete review
router.delete('/:id', controllers.reviews.delete);
// get reviews by user id
router.get('/user/:user_id', controllers.reviews.showReviewsByUser);



module.exports = router;