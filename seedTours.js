const db = require('./models');

// starting with 1 for each African country first
const gAdvTours = [
  {
    company: 'G Adventures',
    name: 'Discover Ethiopia',
    length: 10,
    cost: '$2349',
    countries_visited: ['Ethiopia'],
    link: 'https://www.gadventures.com/trips/discover-ethiopia/DEAA/', 
    // Ethiopia
    primary_country_id: '5ca3c7c3143e781b614f004a',
  },
  {
    company: 'G Adventures',
    name: 'Serengeti to Victoria Falls Adventure',
    length: 20,
    cost: '$2662',
    countries_visited: ['Kenya', 'Malawi', 'Tanzania', 'Zambia', 'Zimbabwe'],
    link: 'https://www.gadventures.com/trips/serengeti-to-victoria-falls-adventure/DNV/', 
    // Kenya
    primary_country_id: '5ca3c7c3143e781b614f004b',
  },
  {
    company: 'G Adventures',
    name: 'Cape & Dunes Overland',
    length: 14,
    cost: '$1349',
    countries_visited: ['South Africa', 'Namibia'],
    link: 'https://www.gadventures.com/trips/cape-dunes-overland-southbound/DNDO/', 
    // South Africa
    primary_country_id: '5ca3c7c3143e781b614f004c',
  },
  {
    company: 'G Adventures',
    name: 'Uganda & Gorillas Overland',
    length: 9,
    cost: '$1879',
    countries_visited: ['Uganda'],
    link: 'https://www.gadventures.com/trips/uganda-gorillas-overland/DUKK/', 
    // Uganda
    primary_country_id: '5ca3c7c3143e781b614f004e',
  },
  {
    company: 'G Adventures',
    name: 'Mt. Kilimanjaro Trek - Marangu Route',
    length: 7,
    cost: '$2337',
    countries_visited: ['Tanzania'],
    link: 'https://www.gadventures.com/trips/mt-kilimanjaro-trek-marangu-route/DTKM/', 
    // Tanzania
    primary_country_id: '5ca3c7c3143e781b614f004d',
  },
  {
    company: 'G Adventures',
    name: 'Serengeti to Victoria Falls Adventure',
    length: 20,
    cost: '$2662',
    countries_visited: ['Kenya', 'Malawi', 'Tanzania', 'Zambia', 'Zimbabwe'],
    link: 'https://www.gadventures.com/trips/serengeti-to-victoria-falls-adventure/DNV/', 
    // Zimbabwe
    primary_country_id: '5ca3c7c3143e781b614f004f',
  },
]


db.Tours.deleteMany({}, (error, tours) => {
  if (error) {
    console.log(`can't delete tours: ${error}`);
  }
  console.log(`deleted tours`);

  db.Tours.create(gAdvTours, (error, tours) => {
    if (error) {
      console.log(`can't create seed tours: ${error}`);
    }
    console.log(`created all G Adventures tours`);
    console.log(`created ${tours.length} tours`);
  });
});