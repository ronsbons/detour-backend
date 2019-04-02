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
  {
    // region_id 2 = Asia
    region_id: 2,
    countryName: 'China',
    countryPhoto: ''
  },
  {
    // region_id 2 = Asia
    region_id: 2,
    countryName: 'India',
    countryPhoto: ''
  },
  {
    // region_id 2 = Asia
    region_id: 2,
    countryName: 'Indonesia',
    countryPhoto: ''
  },
  {
    // region_id 2 = Asia
    region_id: 2,
    countryName: 'Japan',
    countryPhoto: ''
  },
  {
    // region_id 2 = Asia
    region_id: 2,
    countryName: 'Thailand',
    countryPhoto: ''
  },
  {
    // region_id 2 = Asia
    region_id: 2,
    countryName: 'Vietnam',
    countryPhoto: ''
  },
  {
    // region_id 3 = Australia
    region_id: 3,
    countryName: 'Australia',
    countryPhoto: ''
  },
  {
    // region_id 3 = Australia
    region_id: 3,
    countryName: 'New Zealand',
    countryPhoto: ''
  },
  {
    // region_id 4 = Europe
    region_id: 4,
    countryName: 'Croatia',
    countryPhoto: ''
  },
  {
    // region_id 4 = Europe
    region_id: 4,
    countryName: 'France',
    countryPhoto: ''
  },
  {
    // region_id 4 = Europe
    region_id: 4,
    countryName: 'Greece',
    countryPhoto: ''
  },
  {
    // region_id 4 = Europe
    region_id: 4,
    countryName: 'Italy',
    countryPhoto: ''
  },
  {
    // region_id 4 = Europe
    region_id: 4,
    countryName: 'Norway',
    countryPhoto: ''
  },
  {
    // region_id 4 = Europe
    region_id: 4,
    countryName: 'Spain',
    countryPhoto: ''
  },
  {
    // region_id 5 = North America
    region_id: 5,
    countryName: 'Belize',
    countryPhoto: ''
  },
  {
    // region_id 5 = North America
    region_id: 5,
    countryName: 'Canada',
    countryPhoto: ''
  },
  {
    // region_id 5 = North America
    region_id: 5,
    countryName: 'Costa Rica',
    countryPhoto: ''
  },
  {
    // region_id 5 = North America
    region_id: 5,
    countryName: 'Guatemala',
    countryPhoto: ''
  },
  {
    // region_id 5 = North America
    region_id: 5,
    countryName: 'Mexico',
    countryPhoto: ''
  },
  {
    // region_id 5 = North America
    region_id: 5,
    countryName: 'United States',
    countryPhoto: ''
  },
  {
    // region_id 6 = South America
    region_id: 6,
    countryName: 'Argentina',
    countryPhoto: ''
  },
  {
    // region_id 6 = South America
    region_id: 6,
    countryName: 'Brazil',
    countryPhoto: ''
  },
  {
    // region_id 6 = South America
    region_id: 6,
    countryName: 'Colombia',
    countryPhoto: ''
  },
  {
    // region_id 6 = South America
    region_id: 6,
    countryName: 'Ecuador',
    countryPhoto: ''
  },
  {
    // region_id 6 = South America
    region_id: 6,
    countryName: 'Galapagos Islands',
    countryPhoto: ''
  },
  {
    // region_id 6 = South America
    region_id: 6,
    countryName: 'Peru',
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