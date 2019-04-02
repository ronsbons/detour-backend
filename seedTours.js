const db = require('./models');

const newTours = [
  // =================  Africa tours  =================
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
  // =================  Asia tours  =================
  {
    company: 'G Adventures',
    name: 'Essential China',
    length: 21,
    cost: '$2849',
    countries_visited: ['China'],
    link: 'https://www.gadventures.com/trips/essential-china/ACEC/', 
    // China
    primary_country_id: '5ca3c7c3143e781b614f0050',
  },
  {
    company: 'Contiki',
    name: 'China Adventure',
    length: 12,
    cost: '$2639',
    countries_visited: ['China'],
    link: 'https://www.contiki.com/us/en/destinations/asia/tours/china-adventure-3650', 
    // China
    primary_country_id: '5ca3c7c3143e781b614f0050',
  },
  {
    company: 'Flash Pack',
    name: 'Excite your senses in bucket-list China',
    length: 12,
    cost: '$4259',
    countries_visited: ['China'],
    link: 'https://www.flashpack.com/adventure-trips/china-small-group-adventure-solo-travellers-2/', 
    // China
    primary_country_id: '5ca3c7c3143e781b614f0050',
  },
  {
    company: 'Topdeck',
    name: 'China Live',
    length: 12,
    cost: '$2399',
    countries_visited: ['China'],
    link: 'https://www.topdeck.travel/tours/china-live', 
    // China
    primary_country_id: '5ca3c7c3143e781b614f0050',
  },
  {
    company: 'G Adventures',
    name: 'Delhi to Kathmandu Adventure',
    length: 15,
    cost: '$1199',
    countries_visited: ['India', 'Nepal'],
    link: 'https://www.gadventures.com/trips/delhi-to-kathmandu-adventure/AHDK/', 
    // India
    primary_country_id: '5ca3c7c3143e781b614f0051',
  },
  {
    company: 'Contiki',
    name: 'Eternal India',
    length: 12,
    cost: '$2314',
    countries_visited: ['India', 'Nepal'],
    link: 'https://www.contiki.com/us/en/destinations/asia/tours/eternal-india-3026', 
    // India
    primary_country_id: '5ca3c7c3143e781b614f0051',
  },
  {
    company: 'Flash Pack',
    name: 'Awaken your senses in northern India',
    length: 10,
    cost: '$2479',
    countries_visited: ['India'],
    link: 'https://www.flashpack.com/adventure-trips/north-india-small-group-adventure-solo-travellers/', 
    // India
    primary_country_id: '5ca3c7c3143e781b614f0051',
  },
  {
    company: 'G Adventures',
    name: 'Epic Japan',
    length: 11,
    cost: '$2209',
    countries_visited: ['Japan'],
    link: 'https://www.gadventures.com/trips/epic-japan/AJTO/', 
    // Japan
    primary_country_id: '5ca3c7c3143e781b614f0053',
  },
  {
    company: 'Contiki',
    name: 'Japan Winter Wonder',
    length: 10,
    cost: '$2945',
    countries_visited: ['Japan'],
    link: 'https://www.contiki.com/us/en/destinations/asia/tours/japan-winter-wonder-3681', 
    // Japan
    primary_country_id: '5ca3c7c3143e781b614f0053',
  },
  {
    company: 'Contiki',
    name: 'Japan Winter Wonder',
    length: 10,
    cost: '$2945',
    countries_visited: ['Japan'],
    link: 'https://www.contiki.com/us/en/destinations/asia/tours/japan-winter-wonder-3681', 
    // Japan
    primary_country_id: '5ca3c7c3143e781b614f0053',
  },
  {
    company: 'Flash Pack',
    name: 'A sensory journey to Japan',
    length: 13,
    cost: '$5659',
    countries_visited: ['Japan'],
    link: 'https://www.flashpack.com/adventure-trips/japan-small-group-tour-solo-travellers/', 
    // Japan
    primary_country_id: '5ca3c7c3143e781b614f0053',
  },
  {
    company: 'Topdeck',
    name: 'Japan Express',
    length: 7,
    cost: '$1334',
    countries_visited: ['Japan'],
    link: 'https://www.topdeck.travel/tours/japan-express', 
    // Japan
    primary_country_id: '5ca3c7c3143e781b614f0053',
  },
  {
    company: 'G Adventures',
    name: 'Best of Java',
    length: 9,
    cost: '$1104',
    countries_visited: ['Indonesia'],
    link: 'https://www.gadventures.com/trips/best-of-java/AEJV/', 
    // Indonesia
    primary_country_id: '5ca3c7c3143e781b614f0052',
  },
  {
    company: 'Flash Pack',
    name: 'Jurassic Beauty & Dragon Encounters in Java',
    length: 9,
    cost: '$3649',
    countries_visited: ['Indonesia'],
    link: 'https://www.flashpack.com/adventure-trips/komodo-flores-small-group-tour-solo-travellers/', 
    // Indonesia
    primary_country_id: '5ca3c7c3143e781b614f0052',
  },
  {
    company: 'Topdeck',
    name: 'Bali Island Hopper',
    length: 7,
    cost: '$679',
    countries_visited: ['Indonesia'],
    link: 'https://www.topdeck.travel/tours/search#/tours/search?regions=2515&countries=2566', 
    // Indonesia
    primary_country_id: '5ca3c7c3143e781b614f0052',
  },
  {
    company: 'G Adventures',
    name: 'Indochina Discovery',
    length: 30,
    cost: '$2499',
    countries_visited: ['Thailand', 'Vietnam', 'Cambodia', 'Laos'],
    link: 'https://www.gadventures.com/trips/indochina-discovery/ATID/', 
    // Thailand
    primary_country_id: '5ca3c7c3143e781b614f0054',
  },
  {
    company: 'Contiki',
    name: 'Total Thailand',
    length: 16,
    cost: '$2544',
    countries_visited: ['Thailand'],
    link: 'https://www.contiki.com/us/en/destinations/asia/tours/total-thailand-3819', 
    // Thailand
    primary_country_id: '5ca3c7c3143e781b614f0054',
  },
  {
    company: 'Flash Pack',
    name: 'Tropical beauty & paradise sands in Thailand',
    length: 9,
    cost: '$2639',
    countries_visited: ['Thailand'],
    link: 'https://www.flashpack.com/adventure-trips/thailand-small-group-tour-solo-travellers/', 
    // Thailand
    primary_country_id: '5ca3c7c3143e781b614f0054',
  },
  {
    company: 'Topdeck',
    name: 'Thailand Express',
    length: 6,
    cost: '$594',
    countries_visited: ['Thailand'],
    link: 'https://www.topdeck.travel/tours/thailand-express', 
    // Thailand
    primary_country_id: '5ca3c7c3143e781b614f0054',
  },
  {
    company: 'G Adventures',
    name: 'Indochina Discovery',
    length: 30,
    cost: '$2499',
    countries_visited: ['Thailand', 'Vietnam', 'Cambodia', 'Laos'],
    link: 'https://www.gadventures.com/trips/indochina-discovery/ATID/',
    // Vietnam
    primary_country_id: '5ca3c7c3143e781b614f0055',
  },
  {
    company: 'Contiki',
    name: 'Vietnam Experience',
    length: 12,
    cost: '$1656',
    countries_visited: ['Vietnam'],
    link: 'https://www.contiki.com/us/en/destinations/asia/tours/vietnam-experience-220',
    // Vietnam
    primary_country_id: '5ca3c7c3143e781b614f0055',
  },
  {
    company: 'Flash Pack',
    name: 'Discover the heart of Southeast Asia',
    length: 9,
    cost: '$2839',
    countries_visited: ['Vietnam', 'Thailand', 'Cambodia'],
    link: 'https://www.flashpack.com/adventure-trips/south-east-asia-small-group-tour-solo-travellers/',
    // Vietnam
    primary_country_id: '5ca3c7c3143e781b614f0055',
  },
  {
    company: 'Topdeck',
    name: 'Vietnam Uncovered',
    length: 13,
    cost: '$1444',
    countries_visited: ['Vietnam'],
    link: 'https://www.topdeck.travel/tours/vietnam-uncovered',
    // Vietnam
    primary_country_id: '5ca3c7c3143e781b614f0055',
  },
  // =================  Australia tours  =================
  {
    company: 'G Adventures',
    name: 'Complete Australia',
    length: 28,
    cost: '$4159',
    countries_visited: ['Australia'],
    link: 'https://www.gadventures.com/trips/complete-australia/OAMC/',
    // Australia
    primary_country_id: '5ca3c7c3143e781b614f0056',
  },
  {
    company: 'Contiki',
    name: 'The Big Walkabout',
    length: 20,
    cost: '$3859',
    countries_visited: ['Australia'],
    link: 'https://www.contiki.com/us/en/destinations/australia/tours/the-big-walkabout-start-sydney-3706',
    // Australia
    primary_country_id: '5ca3c7c3143e781b614f0056',
  },
  {
    company: 'Flash Pack',
    name: `A bucket-list escape to Australia's East Coast`,
    length: 14,
    cost: '$5389',
    countries_visited: ['Australia'],
    link: 'https://www.flashpack.com/adventure-trips/australia-small-group-adventure-solo-travellers-2/',
    // Australia
    primary_country_id: '5ca3c7c3143e781b614f0056',
  },
  {
    company: 'Topdeck',
    name: 'Ultimate Surfari',
    length: 4,
    cost: '$719',
    countries_visited: ['Australia'],
    link: 'https://www.topdeck.travel/tours/ultimate-surfari',
    // Australia
    primary_country_id: '5ca3c7c3143e781b614f0056',
  },
  {
    company: 'G Adventures',
    name: 'New Zealand - South Island Encompassed',
    length: 16,
    cost: '$1839',
    countries_visited: ['New Zealand'],
    link: 'https://www.gadventures.com/trips/new-zealand-south-island-encompassed/ONSE/',
    // New Zealand
    primary_country_id: '5ca3c7c3143e781b614f0057',
  },
  {
    company: 'Contiki',
    name: 'The Big Tiki',
    length: 19,
    cost: '$2975',
    countries_visited: ['New Zealand'],
    link: 'https://www.contiki.com/us/en/destinations/new-zealand/tours/the-big-tiki-auckland-to-christchurch-winter-3663',
    // New Zealand
    primary_country_id: '5ca3c7c3143e781b614f0057',
  },
  {
    company: 'Topdeck',
    name: 'Sweet As North',
    length: 5,
    cost: '$679',
    countries_visited: ['New Zealand'],
    link: 'https://www.topdeck.travel/tours/sweet-as-north',
    // New Zealand
    primary_country_id: '5ca3c7c3143e781b614f0057',
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