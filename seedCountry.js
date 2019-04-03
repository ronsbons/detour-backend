const db = require('./models');

const newCountries = [
  {
    // region_id 1 = Africa
    region_id: 1,
    countryName: 'Ethiopia',
    countryPhoto: './images/ethiopia-trevor-cole-393231-unsplash.jpg'
  },
  {
    // region_id 1 = Africa
    region_id: 1,
    countryName: 'Kenya',
    countryPhoto: './images/kenya-sutirta-budiman-560096-unsplash.jpg'
  },
  {
    // region_id 1 = Africa
    region_id: 1,
    countryName: 'South Africa',
    countryPhoto: './images/south-africa-jack-young-612174-unsplash.jpg'
  },
  {
    // region_id 1 = Africa
    region_id: 1,
    countryName: 'Tanzania',
    countryPhoto: './images/tanzania-jeremy-pelletier-1121948-unsplash.jpg'
  },
  {
    // region_id 1 = Africa
    region_id: 1,
    countryName: 'Uganda',
    countryPhoto: './images/uganda-random-institute-1401450-unsplash.jpg'
  },
  {
    // region_id 1 = Africa
    region_id: 1,
    countryName: 'Zimbabwe',
    countryPhoto: './images/zimbabwe-christine-donaldson-214622-unsplash.jpg'
  },
  {
    // region_id 2 = Asia
    region_id: 2,
    countryName: 'China',
    countryPhoto: './images/china-diem-nhi-nguyen-591150-unsplash.jpg'
  },
  {
    // region_id 2 = Asia
    region_id: 2,
    countryName: 'India',
    countryPhoto: './images/india-annie-spratt-637598-unsplash.jpg'
  },
  {
    // region_id 2 = Asia
    region_id: 2,
    countryName: 'Indonesia',
    countryPhoto: './images/indonesia-raj-eiamworakul-1074311-unsplash.jpg'
  },
  {
    // region_id 2 = Asia
    region_id: 2,
    countryName: 'Japan',
    countryPhoto: './images/japan-andre-benz-256762-unsplash.jpg'
  },
  {
    // region_id 2 = Asia
    region_id: 2,
    countryName: 'Thailand',
    countryPhoto: './images/thailand-evan-krause-443469-unsplash.jpg'
  },
  {
    // region_id 2 = Asia
    region_id: 2,
    countryName: 'Vietnam',
    countryPhoto: './images/vietnam-h-ng-nguy-n-vi-t-706400-unsplash.jpg'
  },
  {
    // region_id 3 = Australia
    region_id: 3,
    countryName: 'Australia',
    countryPhoto: './images/australia-michael-lammli-776616-unsplash.jpg'
  },
  {
    // region_id 3 = Australia
    region_id: 3,
    countryName: 'New Zealand',
    countryPhoto: './images/new-zealand-casey-horner-741483-unsplash.jpg'
  },
  {
    // region_id 4 = Europe
    region_id: 4,
    countryName: 'Croatia',
    countryPhoto: './images/croatia-marcus-lofvenberg-452430-unsplash.jpg'
  },
  {
    // region_id 4 = Europe
    region_id: 4,
    countryName: 'France',
    countryPhoto: './images/france-ilnur-kalimullin-354455-unsplash.jpg'
  },
  {
    // region_id 4 = Europe
    region_id: 4,
    countryName: 'Greece',
    countryPhoto: './images/greece-jonathan-gallegos-727409-unsplash.jpg'
  },
  {
    // region_id 4 = Europe
    region_id: 4,
    countryName: 'Italy',
    countryPhoto: './images/italy-karol-kaczorek-546390-unsplash.jpg'
  },
  {
    // region_id 4 = Europe
    region_id: 4,
    countryName: 'Norway',
    countryPhoto: './images/norway-michael-fousert-1205288-unsplash.jpg'
  },
  {
    // region_id 4 = Europe
    region_id: 4,
    countryName: 'Spain',
    countryPhoto: './images/spain-florencia-potter-699220-unsplash.jpg'
  },
  {
    // region_id 5 = North America
    region_id: 5,
    countryName: 'Belize',
    countryPhoto: './images/belize-davy-steinhauer-533710-unsplash.jpg'
  },
  {
    // region_id 5 = North America
    region_id: 5,
    countryName: 'Canada',
    countryPhoto: './images/canada-ali-tawfiq-548956-unsplash.jpg'
  },
  {
    // region_id 5 = North America
    region_id: 5,
    countryName: 'Costa Rica',
    countryPhoto: './images/costa-rica-perry-grone-732582-unsplash.jpg'
  },
  {
    // region_id 5 = North America
    region_id: 5,
    countryName: 'Guatemala',
    countryPhoto: './images/guatemala-perry-grone-1125356-unsplash.jpg'
  },
  {
    // region_id 5 = North America
    region_id: 5,
    countryName: 'Mexico',
    countryPhoto: './images/mexico-jezael-melgoza-551505-unsplash.jpg'
  },
  {
    // region_id 5 = North America
    region_id: 5,
    countryName: 'United States',
    countryPhoto: './images/united-states-andre-benz-231286-unsplash.jpg'
  },
  {
    // region_id 6 = South America
    region_id: 6,
    countryName: 'Argentina',
    countryPhoto: './images/argentina-ignacio-aguilar-422036-unsplash.jpg'
  },
  {
    // region_id 6 = South America
    region_id: 6,
    countryName: 'Brazil',
    countryPhoto: './images/brazil-cariwest-carnival-48796.jpg'
  },
  {
    // region_id 6 = South America
    region_id: 6,
    countryName: 'Colombia',
    countryPhoto: './images/colombia-ricardo-gomez-angel-789727-unsplash.jpg'
  },
  {
    // region_id 6 = South America
    region_id: 6,
    countryName: 'Ecuador',
    countryPhoto: './images/ecuador-dan-romero-1140983-unsplash.jpg'
  },
  {
    // region_id 6 = South America
    region_id: 6,
    countryName: 'Galapagos Islands',
    countryPhoto: './images/galapagos-islands-simon-matzinger-347343-unsplash.jpg'
  },
  {
    // region_id 6 = South America
    region_id: 6,
    countryName: 'Peru',
    countryPhoto: './images/peru-johnson-wang-515975-unsplash.jpg'
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