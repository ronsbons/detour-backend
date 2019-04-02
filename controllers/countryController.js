const db = require('../models');

module.exports = {
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