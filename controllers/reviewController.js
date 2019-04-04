const db = require('../models');

module.exports = {
  // get reviews by country id to display on country's page
  // [] DO I NEED TO POPULATE COUNTRY INFO..?
  showReviewsByCountry: (request, response) => {
    console.log(`in showReviewsByCountry`);
    // country_id is the property key in the Reviews model
    // params.country_id is the params set in the review routes
    db.Reviews.find({country_id: request.params.country_id})
      // pull in user info
      .populate('user_id')
      .exec()
      .then( (foundReviews) => {
        console.log(`fournd reviews for country: ${foundReviews}`);
        // respond with found reviews
        response.json(foundReviews);
      }).catch( (error) => {
        console.log(`find reviews by country error: ${error}`);
        response.status(500).json({error: error});
      });
  },

  // =====================  admin routes =====================
  // get all reviews
  showAllReviews: (request, response) => {
    console.log(`in showAllReviews`);
    db.Reviews.find({})
      // pull in user and country info
      .populate('user_id')
      .populate('country_id')
      .exec()
      .then( (foundReviews) => {
        console.log(`found all reviews: ${foundReviews}`);
        // respond with found reviews
        response.json(foundReviews);
      }).catch( (error) => {
        console.log(`db.Reviews.catch error ${error}`);
        response.status(500).json({error: error});
      });
  },

  // get one review
  showOne: (request, response) => {
    console.log(`in showOne review`);
    db.Reviews.findById({_id: request.params.id})
      .populate('user_id')
      .populate('country_id')
      .exec()
      .then( (foundReview) => {
        console.log(`found review: ${foundReview}`);
        response.json(foundReview);
      }).catch( (error) => {
        console.log(`find one review error: ${error}`);
        response.status(500).json({error: error});
      });
  },

  // =====================  user routes =====================
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

  // edit a review
  // [] DO I NEED TO POPULATE USER AND/OR COUNTRY INFO...?
  edit: (request, response) => {
    console.log(`edit post request ${request.body}`);
    db.Reviews.findOneAndUpdate(
      {_id: request.params.id},
      // request.body will hold the content of the review to be updated
      // can hold multiple properties
      request.body,
      // return the updated review
      { new: true }
    ).populate('user_id')
      .exec()
      .then( (updatedReview) => {
        console.log(`updated review: ${updatedReview}`);
        response.json(updatedReview);
      }).catch( (error) => {
        console.log(`update review error: ${error}`);
        response.status(500).json({error: error});
      });
  },

  // delete a review
  delete: (request, response) => {
    console.log(`delete review`);
    // find review by _id
    db.Reviews.findOneAndDelete({_id: request.params.id})
      .exec()
      .then( (deletedReview) => {
        console.log(`deleted review: ${deletedReview}`);
        response.json(deletedReview);
      }).catch( (error) => {
        console.log(`delete review error: ${error}`);
        response.status(500).json({error: error});
      });
  },
};