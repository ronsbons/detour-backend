const db = require('./models');

const newCountries = [
  {
    // region_id 1 = Africa
    region_id: 1,
    countryName: 'Ethiopia',
    countryPhoto: ''
  },
  {
    // region_id 1 = Africa
    region_id: 1,
    countryName: 'Kenya',
    countryPhoto: ''
  },
  {
    // region_id 1 = Africa
    region_id: 1,
    countryName: 'South Africa',
    countryPhoto: ''
  },
  {
    // region_id 1 = Africa
    region_id: 1,
    countryName: 'Tanzania',
    countryPhoto: ''
  },
  {
    // region_id 1 = Africa
    region_id: 1,
    countryName: 'Uganda',
    countryPhoto: ''
  },
  {
    // region_id 1 = Africa
    region_id: 1,
    countryName: 'Zimbabwe',
    countryPhoto: ''
  },
]

db.Country.deleteMany({}, (error, countries) => {
  if (error) {
    console.log(`can't delete countries: ${error}`);
  }
  console.log('deleted countries');

  db.Country.create(newCountries, (error, countries) => {
    if (error) {
      console.log(`can't create seed countries: ${error}`);
    }
    console.log('created all countries');
    console.log(`created ${newCountries.length} countries`);
  })
});