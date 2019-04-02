const db = require('./models');

// starting with 1 for each African country first
const newTours = [
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
  {
    company: 'Contiki',
    name: 'East Africa Safari',
    length: 13,
    cost: '$4299',
    countries_visited: ['Kenya', 'Tanzania'],
    link: 'https://www.contiki.com/us/en/destinations/africa-the-middle-east/tours/east-africa-safari-3815', 
    // Kenya
    primary_country_id: '5ca3c7c3143e781b614f004b',
  },
  {
    company: 'Contiki',
    name: 'Cape, Safari & Falls',
    length: 11,
    cost: '$2365',
    countries_visited: ['South Africa', 'Zimbabwe', 'Botswana'],
    link: 'https://www.contiki.com/us/en/destinations/africa-the-middle-east/tours/cape-safari-falls-3814', 
    // South Africa
    primary_country_id: '5ca3c7c3143e781b614f004c',
  },
  {
    company: 'Contiki',
    name: 'Gorilla Trek',
    length: 4,
    cost: '$2635',
    countries_visited: ['Uganda'],
    link: 'https://www.contiki.com/us/en/destinations/africa-the-middle-east/tours/gorilla-trek-3835', 
    // Uganda
    primary_country_id: '5ca3c7c3143e781b614f004e',
  },
  {
    company: 'Contiki',
    name: 'Rongai Kili Climb',
    length: 8,
    cost: '$2595',
    countries_visited: ['Tanzania'],
    link: 'https://www.contiki.com/us/en/destinations/africa-the-middle-east/tours/rongai-kili-climb-3812', 
    // Tanzania
    primary_country_id: '5ca3c7c3143e781b614f004d',
  },
  {
    company: 'Contiki',
    name: 'Cape, Safari & Falls',
    length: 11,
    cost: '$2365',
    countries_visited: ['South Africa', 'Zimbabwe', 'Botswana'],
    link: 'https://www.contiki.com/us/en/destinations/africa-the-middle-east/tours/cape-safari-falls-3814', 
    // Zimbabwe
    primary_country_id: '5ca3c7c3143e781b614f004f',
  },
  {
    company: 'Flash Pack',
    name: 'Smash your comfort zone in South Africa',
    length: 13,
    cost: '$4849',
    countries_visited: ['South Africa'],
    link: 'https://www.flashpack.com/adventure-trips/south-africa-garden-route/', 
    // South Africa
    primary_country_id: '5ca3c7c3143e781b614f004c',
  },
  {
    company: 'Flash Pack',
    name: 'Be wowed by the wonders of Tanzania',
    length: 9,
    cost: '$4514',
    countries_visited: ['Tanzania'],
    link: 'https://www.flashpack.com/adventure-trips/tanzania-small-group-adventure-solo-travellers/', 
    // Tanzania
    primary_country_id: '5ca3c7c3143e781b614f004d',
  },
  {
    company: 'Flash Pack',
    name: 'Epic safari in Zimbabwe & Botswana',
    length: 9,
    cost: '$4049',
    countries_visited: ['Zimbabwe', 'Botswana'],
    link: 'https://www.flashpack.com/adventure-trips/the-ultimate-safari-in-zimbabwe-and-botswana/', 
    // Zimbabwe
    primary_country_id: '5ca3c7c3143e781b614f004f',
  },
  {
    company: 'Topdeck',
    name: 'Gorilla Encounter',
    length: 14,
    cost: '$1650',
    countries_visited: ['Kenya', 'Uganda'],
    link: 'https://www.topdeck.travel/tours/gorilla-encounter', 
    // Kenya
    primary_country_id: '5ca3c7c3143e781b614f004b',
  },
  {
    company: 'Topdeck',
    name: 'Kruger, Swazi & Beach',
    length: 7,
    cost: '$715',
    countries_visited: ['South Africa', 'Swaziland'],
    link: 'https://www.topdeck.travel/tours/kruger-swazi-beach', 
    // South Africa
    primary_country_id: '5ca3c7c3143e781b614f004c',
  },
  {
    company: 'Topdeck',
    name: 'Troop to the Gorillas',
    length: 6,
    cost: '$1015',
    countries_visited: ['Uganda'],
    link: 'https://www.topdeck.travel/tours/troop-to-the-gorillas', 
    // Uganda
    primary_country_id: '5ca3c7c3143e781b614f004e',
  },
  {
    company: 'Topdeck',
    name: 'Highlights of Tanzania',
    length: 11,
    cost: '$1695',
    countries_visited: ['Tanzania', 'Kenya'],
    link: 'https://www.topdeck.travel/tours/highlights-of-tanzania', 
    // Tanzania
    primary_country_id: '5ca3c7c3143e781b614f004d',
  },
  {
    company: 'Topdeck',
    name: 'African Insight',
    length: 7,
    cost: '$1210',
    countries_visited: ['Zimbabwe', 'South Africa', 'Zambia'],
    link: 'https://www.topdeck.travel/tours/african-insight', 
    // Zimbabwe
    primary_country_id: '5ca3c7c3143e781b614f004f',
  },
]


db.Tours.deleteMany({}, (error, tours) => {
  if (error) {
    console.log(`can't delete tours: ${error}`);
  }
  console.log(`deleted tours`);

  db.Tours.create(newTours, (error, tours) => {
    if (error) {
      console.log(`can't create seed tours: ${error}`);
    }
    console.log(`created all tours`);
    console.log(`created ${tours.length} tours`);
  });
});