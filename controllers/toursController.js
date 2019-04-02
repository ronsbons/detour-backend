const db = require('../models');

module.exports = {
  // show all tours
  show: (request, response) => {
    db.Tours.find({}, (error, foundTours) => {
      if (error) {
        console.log(`can't get all tours: ${error}`);
      }
      response.json(foundTours);
      console.log(`found all tours: ${foundTours}`);
    });
  },

  // find one tour
  showOne: (request, response) => {
    db.Tours.find({_id: request.params.id}, (error, foundTour) => {
      if (error) {
        console.log(`can't find one tour: ${error}`);
      }
      response.json(foundTour);
      console.log(`found one tour: ${foundTour}`);
    });
  },

  // find tours by primary_country reference id
  showByCountry: (request, response) => {
    db.Tours.find({primary_country_id: request.params.country_id}, (error, foundTours) => {
      if (error) {
        console.log(`can't find tours by primary country: ${error}`);
      }
      response.json(foundTours);
      console.log(`found tours by primary country: ${foundTours}`);
    });
  },
}