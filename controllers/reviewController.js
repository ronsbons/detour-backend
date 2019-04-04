const db = require('../models');

module.exports = {
  // add a review
  add: (request, response) => {
    console.log(`add a review request: ${request.body}`);
    // find the user who's creating the review in order to tie the review to the user id
    db.User.findOne({_id: request.body.user_id})
      .exec()
      .then( (foundUser) => {
        console.log(`found user when creating a post: ${foundUser}`);
        // after finding the user, find the country to tie the review to the country id
        db.Country.findOne({_id: request.body.country_id})
          .exec()
          .then( (foundCountry) => {
            console.log(`found country when creating a review: ${foundCountry}`);
            // after finding the country, create a new review
            db.Reviews.create({
              content: request.body.content,
              rating: parseInt(request.body.rating),
              user_id: foundUser,
              country_id: foundCountry,
            }, (error, newReview) => {
              if (error) {
                console.log(`error creating a review ${error}`);
              };
              // send the newReview as the response
              console.log(`new review: ${newReview}`);
              response.json(newReview);
            });
          }).catch( (error) => {
            console.log(`db.Country.findOne.catch error when creating a review: ${error}`);
            response.status(500).json({error: error});
          });
      }).catch( (error) => {
        console.log(`db.User.findOne.catch error when creating a review: ${error}`);
        response.status(500).json({error: error});
      });
  },

  // get all reviews
  showAllReviews: (request, response) => {
    db.Reviews.find({})
      .populate('user_id')
      .populate('country_id')
      .exec()
      .then( (foundReviews) => {
        console.log(`found all reviews: ${foundReviews}`);
        response.json(foundReviews);
      }).catch( (error) => {
        console.log(`db.Reviews.catch error ${error}`);
        response.status(500).json({error: error});
      });
  },
};