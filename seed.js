const db = require('./models');

const newCountries = [
  {
    // region_id 1 = Africa
    region_id: 1,
    locationName: 'Ethiopia',
    locationPhoto: ''
  },
  {
    // region_id 1 = Africa
    region_id: 1,
    locationName: 'Kenya',
    locationPhoto: ''
  },
  {
    // region_id 1 = Africa
    region_id: 1,
    locationName: 'South Africa',
    locationPhoto: ''
  },
  {
    // region_id 1 = Africa
    region_id: 1,
    locationName: 'Tanzania',
    locationPhoto: ''
  },
  {
    // region_id 1 = Africa
    region_id: 1,
    locationName: 'Uganda',
    locationPhoto: ''
  },
  {
    // region_id 1 = Africa
    region_id: 1,
    locationName: 'Zimbabwe',
    locationPhoto: ''
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