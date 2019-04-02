const db = require('../models');

module.exports = {
  // show all countries
  show: (request, response) => {
    db.Country.find({}, (error, foundCountries) => {
      if (error) {
        console.log(`can't get all countries: ${error}`);
      }
      response.json(foundCountries);
      console.log(`found all countries ${foundCountries}`);
    });
  },

  // find one country by its id
  showOne: (request, response) => {
    db.Country.find({_id: request.params.id}, (error, foundCountry) => {
      if (error) {
        console.log(`can't find one country: ${error}`);
      }
      response.json(foundCountry);
      console.log(`found one country: ${foundCountry}`);
    });
  },

  // find countries by region
  showByRegion: (request, response) => {
    db.Country.find({region_id: request.params.region_id}, (error, foundCountries) => {
      if (error) {
        console.log(`can't find countries using region id: ${error}`);
      }
      response.json(foundCountries);
      console.log(`found countries: ${foundCountries}`);
    });
  },
}