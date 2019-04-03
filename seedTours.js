const db = require('./models');

const newTours = [
  // =================  Africa tours  =================
  {
    company: './images/g-adventures-seeklogo.com.svg',
    name: 'Discover Ethiopia',
    length: 10,
    cost: '$2349',
    countries_visited: ['Ethiopia'],
    link: 'https://www.gadventures.com/trips/discover-ethiopia/DEAA/',
    // Ethiopia
    primary_country_id: '5ca3c7c3143e781b614f004a',
  },
  {
    company: './images/g-adventures-seeklogo.com.svg',
    name: 'Serengeti to Victoria Falls Adventure',
    length: 20,
    cost: '$2662',
    countries_visited: ['Kenya', 'Malawi', 'Tanzania', 'Zambia', 'Zimbabwe'],
    link: 'https://www.gadventures.com/trips/serengeti-to-victoria-falls-adventure/DNV/', 
    // Kenya
    primary_country_id: '5ca3c7c3143e781b614f004b',
  },
  {
    company: './images/g-adventures-seeklogo.com.svg',
    name: 'Cape & Dunes Overland',
    length: 14,
    cost: '$1349',
    countries_visited: ['South Africa', 'Namibia'],
    link: 'https://www.gadventures.com/trips/cape-dunes-overland-southbound/DNDO/', 
    // South Africa
    primary_country_id: '5ca3c7c3143e781b614f004c',
  },
  {
    company: './images/g-adventures-seeklogo.com.svg',
    name: 'Uganda & Gorillas Overland',
    length: 9,
    cost: '$1879',
    countries_visited: ['Uganda'],
    link: 'https://www.gadventures.com/trips/uganda-gorillas-overland/DUKK/', 
    // Uganda
    primary_country_id: '5ca3c7c3143e781b614f004e',
  },
  {
    company: './images/g-adventures-seeklogo.com.svg',
    name: 'Mt. Kilimanjaro Trek - Marangu Route',
    length: 7,
    cost: '$2337',
    countries_visited: ['Tanzania'],
    link: 'https://www.gadventures.com/trips/mt-kilimanjaro-trek-marangu-route/DTKM/', 
    // Tanzania
    primary_country_id: '5ca3c7c3143e781b614f004d',
  },
  {
    company: './images/g-adventures-seeklogo.com.svg',
    name: 'Serengeti to Victoria Falls Adventure',
    length: 20,
    cost: '$2662',
    countries_visited: ['Kenya', 'Malawi', 'Tanzania', 'Zambia', 'Zimbabwe'],
    link: 'https://www.gadventures.com/trips/serengeti-to-victoria-falls-adventure/DNV/', 
    // Zimbabwe
    primary_country_id: '5ca3c7c3143e781b614f004f',
  },
  {
    company: './images/contiki-logo-vector.svg',
    name: 'East Africa Safari',
    length: 13,
    cost: '$4299',
    countries_visited: ['Kenya', 'Tanzania'],
    link: 'https://www.contiki.com/us/en/destinations/africa-the-middle-east/tours/east-africa-safari-3815', 
    // Kenya
    primary_country_id: '5ca3c7c3143e781b614f004b',
  },
  {
    company: './images/contiki-logo-vector.svg',
    name: 'Cape, Safari & Falls',
    length: 11,
    cost: '$2365',
    countries_visited: ['South Africa', 'Zimbabwe', 'Botswana'],
    link: 'https://www.contiki.com/us/en/destinations/africa-the-middle-east/tours/cape-safari-falls-3814', 
    // South Africa
    primary_country_id: '5ca3c7c3143e781b614f004c',
  },
  {
    company: './images/contiki-logo-vector.svg',
    name: 'Gorilla Trek',
    length: 4,
    cost: '$2635',
    countries_visited: ['Uganda'],
    link: 'https://www.contiki.com/us/en/destinations/africa-the-middle-east/tours/gorilla-trek-3835', 
    // Uganda
    primary_country_id: '5ca3c7c3143e781b614f004e',
  },
  {
    company: './images/contiki-logo-vector.svg',
    name: 'Rongai Kili Climb',
    length: 8,
    cost: '$2595',
    countries_visited: ['Tanzania'],
    link: 'https://www.contiki.com/us/en/destinations/africa-the-middle-east/tours/rongai-kili-climb-3812', 
    // Tanzania
    primary_country_id: '5ca3c7c3143e781b614f004d',
  },
  {
    company: './images/contiki-logo-vector.svg',
    name: 'Cape, Safari & Falls',
    length: 11,
    cost: '$2365',
    countries_visited: ['South Africa', 'Zimbabwe', 'Botswana'],
    link: 'https://www.contiki.com/us/en/destinations/africa-the-middle-east/tours/cape-safari-falls-3814', 
    // Zimbabwe
    primary_country_id: '5ca3c7c3143e781b614f004f',
  },
  {
    company: './images/flashpack.png',
    name: 'Smash your comfort zone in South Africa',
    length: 13,
    cost: '$4849',
    countries_visited: ['South Africa'],
    link: 'https://www.flashpack.com/adventure-trips/south-africa-garden-route/', 
    // South Africa
    primary_country_id: '5ca3c7c3143e781b614f004c',
  },
  {
    company: './images/flashpack.png',
    name: 'Be wowed by the wonders of Tanzania',
    length: 9,
    cost: '$4514',
    countries_visited: ['Tanzania'],
    link: 'https://www.flashpack.com/adventure-trips/tanzania-small-group-adventure-solo-travellers/', 
    // Tanzania
    primary_country_id: '5ca3c7c3143e781b614f004d',
  },
  {
    company: './images/flashpack.png',
    name: 'Epic safari in Zimbabwe & Botswana',
    length: 9,
    cost: '$4049',
    countries_visited: ['Zimbabwe', 'Botswana'],
    link: 'https://www.flashpack.com/adventure-trips/the-ultimate-safari-in-zimbabwe-and-botswana/', 
    // Zimbabwe
    primary_country_id: '5ca3c7c3143e781b614f004f',
  },
  {
    company: './images/topdeck-travel-logo.png',
    name: 'Gorilla Encounter',
    length: 14,
    cost: '$1650',
    countries_visited: ['Kenya', 'Uganda'],
    link: 'https://www.topdeck.travel/tours/gorilla-encounter', 
    // Kenya
    primary_country_id: '5ca3c7c3143e781b614f004b',
  },
  {
    company: './images/topdeck-travel-logo.png',
    name: 'Kruger, Swazi & Beach',
    length: 7,
    cost: '$715',
    countries_visited: ['South Africa', 'Swaziland'],
    link: 'https://www.topdeck.travel/tours/kruger-swazi-beach', 
    // South Africa
    primary_country_id: '5ca3c7c3143e781b614f004c',
  },
  {
    company: './images/topdeck-travel-logo.png',
    name: 'Troop to the Gorillas',
    length: 6,
    cost: '$1015',
    countries_visited: ['Uganda'],
    link: 'https://www.topdeck.travel/tours/troop-to-the-gorillas', 
    // Uganda
    primary_country_id: '5ca3c7c3143e781b614f004e',
  },
  {
    company: './images/topdeck-travel-logo.png',
    name: 'Highlights of Tanzania',
    length: 11,
    cost: '$1695',
    countries_visited: ['Tanzania', 'Kenya'],
    link: 'https://www.topdeck.travel/tours/highlights-of-tanzania', 
    // Tanzania
    primary_country_id: '5ca3c7c3143e781b614f004d',
  },
  {
    company: './images/topdeck-travel-logo.png',
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
    company: './images/g-adventures-seeklogo.com.svg',
    name: 'Essential China',
    length: 21,
    cost: '$2849',
    countries_visited: ['China'],
    link: 'https://www.gadventures.com/trips/essential-china/ACEC/', 
    // China
    primary_country_id: '5ca3c7c3143e781b614f0050',
  },
  {
    company: './images/contiki-logo-vector.svg',
    name: 'China Adventure',
    length: 12,
    cost: '$2639',
    countries_visited: ['China'],
    link: 'https://www.contiki.com/us/en/destinations/asia/tours/china-adventure-3650', 
    // China
    primary_country_id: '5ca3c7c3143e781b614f0050',
  },
  {
    company: './images/flashpack.png',
    name: 'Excite your senses in bucket-list China',
    length: 12,
    cost: '$4259',
    countries_visited: ['China'],
    link: 'https://www.flashpack.com/adventure-trips/china-small-group-adventure-solo-travellers-2/', 
    // China
    primary_country_id: '5ca3c7c3143e781b614f0050',
  },
  {
    company: './images/topdeck-travel-logo.png',
    name: 'China Live',
    length: 12,
    cost: '$2399',
    countries_visited: ['China'],
    link: 'https://www.topdeck.travel/tours/china-live', 
    // China
    primary_country_id: '5ca3c7c3143e781b614f0050',
  },
  {
    company: './images/g-adventures-seeklogo.com.svg',
    name: 'Delhi to Kathmandu Adventure',
    length: 15,
    cost: '$1199',
    countries_visited: ['India', 'Nepal'],
    link: 'https://www.gadventures.com/trips/delhi-to-kathmandu-adventure/AHDK/', 
    // India
    primary_country_id: '5ca3c7c3143e781b614f0051',
  },
  {
    company: './images/contiki-logo-vector.svg',
    name: 'Eternal India',
    length: 12,
    cost: '$2314',
    countries_visited: ['India', 'Nepal'],
    link: 'https://www.contiki.com/us/en/destinations/asia/tours/eternal-india-3026', 
    // India
    primary_country_id: '5ca3c7c3143e781b614f0051',
  },
  {
    company: './images/flashpack.png',
    name: 'Awaken your senses in northern India',
    length: 10,
    cost: '$2479',
    countries_visited: ['India'],
    link: 'https://www.flashpack.com/adventure-trips/north-india-small-group-adventure-solo-travellers/', 
    // India
    primary_country_id: '5ca3c7c3143e781b614f0051',
  },
  {
    company: './images/g-adventures-seeklogo.com.svg',
    name: 'Epic Japan',
    length: 11,
    cost: '$2209',
    countries_visited: ['Japan'],
    link: 'https://www.gadventures.com/trips/epic-japan/AJTO/', 
    // Japan
    primary_country_id: '5ca3c7c3143e781b614f0053',
  },
  {
    company: './images/contiki-logo-vector.svg',
    name: 'Japan Winter Wonder',
    length: 10,
    cost: '$2945',
    countries_visited: ['Japan'],
    link: 'https://www.contiki.com/us/en/destinations/asia/tours/japan-winter-wonder-3681', 
    // Japan
    primary_country_id: '5ca3c7c3143e781b614f0053',
  },
  {
    company: './images/flashpack.png',
    name: 'A sensory journey to Japan',
    length: 13,
    cost: '$5659',
    countries_visited: ['Japan'],
    link: 'https://www.flashpack.com/adventure-trips/japan-small-group-tour-solo-travellers/', 
    // Japan
    primary_country_id: '5ca3c7c3143e781b614f0053',
  },
  {
    company: './images/topdeck-travel-logo.png',
    name: 'Japan Express',
    length: 7,
    cost: '$1334',
    countries_visited: ['Japan'],
    link: 'https://www.topdeck.travel/tours/japan-express', 
    // Japan
    primary_country_id: '5ca3c7c3143e781b614f0053',
  },
  {
    company: './images/g-adventures-seeklogo.com.svg',
    name: 'Best of Java',
    length: 9,
    cost: '$1104',
    countries_visited: ['Indonesia'],
    link: 'https://www.gadventures.com/trips/best-of-java/AEJV/', 
    // Indonesia
    primary_country_id: '5ca3c7c3143e781b614f0052',
  },
  {
    company: './images/flashpack.png',
    name: 'Jurassic Beauty & Dragon Encounters in Java',
    length: 9,
    cost: '$3649',
    countries_visited: ['Indonesia'],
    link: 'https://www.flashpack.com/adventure-trips/komodo-flores-small-group-tour-solo-travellers/', 
    // Indonesia
    primary_country_id: '5ca3c7c3143e781b614f0052',
  },
  {
    company: './images/topdeck-travel-logo.png',
    name: 'Bali Island Hopper',
    length: 7,
    cost: '$679',
    countries_visited: ['Indonesia'],
    link: 'https://www.topdeck.travel/tours/search#/tours/search?regions=2515&countries=2566', 
    // Indonesia
    primary_country_id: '5ca3c7c3143e781b614f0052',
  },
  {
    company: './images/g-adventures-seeklogo.com.svg',
    name: 'Indochina Discovery',
    length: 30,
    cost: '$2499',
    countries_visited: ['Thailand', 'Vietnam', 'Cambodia', 'Laos'],
    link: 'https://www.gadventures.com/trips/indochina-discovery/ATID/', 
    // Thailand
    primary_country_id: '5ca3c7c3143e781b614f0054',
  },
  {
    company: './images/contiki-logo-vector.svg',
    name: 'Total Thailand',
    length: 16,
    cost: '$2544',
    countries_visited: ['Thailand'],
    link: 'https://www.contiki.com/us/en/destinations/asia/tours/total-thailand-3819', 
    // Thailand
    primary_country_id: '5ca3c7c3143e781b614f0054',
  },
  {
    company: './images/flashpack.png',
    name: 'Tropical beauty & paradise sands in Thailand',
    length: 9,
    cost: '$2639',
    countries_visited: ['Thailand'],
    link: 'https://www.flashpack.com/adventure-trips/thailand-small-group-tour-solo-travellers/', 
    // Thailand
    primary_country_id: '5ca3c7c3143e781b614f0054',
  },
  {
    company: './images/topdeck-travel-logo.png',
    name: 'Thailand Express',
    length: 6,
    cost: '$594',
    countries_visited: ['Thailand'],
    link: 'https://www.topdeck.travel/tours/thailand-express', 
    // Thailand
    primary_country_id: '5ca3c7c3143e781b614f0054',
  },
  {
    company: './images/g-adventures-seeklogo.com.svg',
    name: 'Indochina Discovery',
    length: 30,
    cost: '$2499',
    countries_visited: ['Thailand', 'Vietnam', 'Cambodia', 'Laos'],
    link: 'https://www.gadventures.com/trips/indochina-discovery/ATID/',
    // Vietnam
    primary_country_id: '5ca3c7c3143e781b614f0055',
  },
  {
    company: './images/contiki-logo-vector.svg',
    name: 'Vietnam Experience',
    length: 12,
    cost: '$1656',
    countries_visited: ['Vietnam'],
    link: 'https://www.contiki.com/us/en/destinations/asia/tours/vietnam-experience-220',
    // Vietnam
    primary_country_id: '5ca3c7c3143e781b614f0055',
  },
  {
    company: './images/flashpack.png',
    name: 'Discover the heart of Southeast Asia',
    length: 9,
    cost: '$2839',
    countries_visited: ['Vietnam', 'Thailand', 'Cambodia'],
    link: 'https://www.flashpack.com/adventure-trips/south-east-asia-small-group-tour-solo-travellers/',
    // Vietnam
    primary_country_id: '5ca3c7c3143e781b614f0055',
  },
  {
    company: './images/topdeck-travel-logo.png',
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
    company: './images/g-adventures-seeklogo.com.svg',
    name: 'Complete Australia',
    length: 28,
    cost: '$4159',
    countries_visited: ['Australia'],
    link: 'https://www.gadventures.com/trips/complete-australia/OAMC/',
    // Australia
    primary_country_id: '5ca3c7c3143e781b614f0056',
  },
  {
    company: './images/contiki-logo-vector.svg',
    name: 'The Big Walkabout',
    length: 20,
    cost: '$3859',
    countries_visited: ['Australia'],
    link: 'https://www.contiki.com/us/en/destinations/australia/tours/the-big-walkabout-start-sydney-3706',
    // Australia
    primary_country_id: '5ca3c7c3143e781b614f0056',
  },
  {
    company: './images/flashpack.png',
    name: `A bucket-list escape to Australia's East Coast`,
    length: 14,
    cost: '$5389',
    countries_visited: ['Australia'],
    link: 'https://www.flashpack.com/adventure-trips/australia-small-group-adventure-solo-travellers-2/',
    // Australia
    primary_country_id: '5ca3c7c3143e781b614f0056',
  },
  {
    company: './images/topdeck-travel-logo.png',
    name: 'Ultimate Surfari',
    length: 4,
    cost: '$719',
    countries_visited: ['Australia'],
    link: 'https://www.topdeck.travel/tours/ultimate-surfari',
    // Australia
    primary_country_id: '5ca3c7c3143e781b614f0056',
  },
  {
    company: './images/g-adventures-seeklogo.com.svg',
    name: 'New Zealand - South Island Encompassed',
    length: 16,
    cost: '$1839',
    countries_visited: ['New Zealand'],
    link: 'https://www.gadventures.com/trips/new-zealand-south-island-encompassed/ONSE/',
    // New Zealand
    primary_country_id: '5ca3c7c3143e781b614f0057',
  },
  {
    company: './images/contiki-logo-vector.svg',
    name: 'The Big Tiki',
    length: 19,
    cost: '$2975',
    countries_visited: ['New Zealand'],
    link: 'https://www.contiki.com/us/en/destinations/new-zealand/tours/the-big-tiki-auckland-to-christchurch-winter-3663',
    // New Zealand
    primary_country_id: '5ca3c7c3143e781b614f0057',
  },
  {
    company: './images/topdeck-travel-logo.png',
    name: 'Sweet As North',
    length: 5,
    cost: '$679',
    countries_visited: ['New Zealand'],
    link: 'https://www.topdeck.travel/tours/sweet-as-north',
    // New Zealand
    primary_country_id: '5ca3c7c3143e781b614f0057',
  },
  // =================  Europe tours  =================
  {
    company: './images/g-adventures-seeklogo.com.svg',
    name: 'Sailing Croatia - Split to Dubrovnik',
    length: 8,
    cost: '$1087',
    countries_visited: ['Croatia'],
    link: 'https://www.gadventures.com/trips/sailing-croatia-split-to-dubrovnik/ECVS/',
    // Croatia
    primary_country_id: '5ca3c7c3143e781b614f0058',
  },
  {
    company: './images/contiki-logo-vector.svg',
    name: 'Croatia Island Escape',
    length: 9,
    cost: '$1116',
    countries_visited: ['Croatia'],
    link: 'https://www.contiki.com/us/en/destinations/europe/tours/croatia-island-escape-3266',
    // Croatia
    primary_country_id: '5ca3c7c3143e781b614f0058',
  },
  {
    company: './images/flashpack.png',
    name: 'Experience the beauty of coastal Croatia',
    length: 6,
    cost: '$2154',
    countries_visited: ['Croatia'],
    link: 'https://www.flashpack.com/adventure-trips/coastal-croatia-small-group-tour-solo-travellers/',
    // Croatia
    primary_country_id: '5ca3c7c3143e781b614f0058',
  },
  {
    company: './images/topdeck-travel-logo.png',
    name: 'Eastern Discovery',
    length: 8,
    cost: '$1289',
    countries_visited: ['Croatia', 'Romania', 'Bulgaria', 'Serbia', 'Bosnia and Herzegovina'],
    link: 'https://www.topdeck.travel/tours/eastern-discovery',
    // Croatia
    primary_country_id: '5ca3c7c3143e781b614f0058',
  },
  {
    company: './images/g-adventures-seeklogo.com.svg',
    name: 'Trekking Mont Blanc',
    length: 10,
    cost: '$1699',
    countries_visited: ['France', 'Switzerland', 'Italy'],
    link: 'https://www.gadventures.com/trips/trekking-mont-blanc/EFMB/',
    // France
    primary_country_id: '5ca3c7c3143e781b614f0059',
  },
  {
    company: './images/contiki-logo-vector.svg',
    name: 'European Adventurer',
    length: 38,
    cost: '$5842',
    countries_visited: ['France', 'England', 'Spain', 'Italy', 'Greece', 'Albania', 'Croatia', 'Slovenia', 'Austria', 'Germany', 'Switzerland', 'Netherlands', 'Monaco', 'The Vatican', 'Montenegro', 'Bosnia and Herzegovina', 'Liechtenstein', 'Belgium'],
    link: 'https://www.contiki.com/us/en/destinations/europe/tours/european-adventurer-107',
    // France
    primary_country_id: '5ca3c7c3143e781b614f0059',
  },
  {
    company: './images/topdeck-travel-logo.png',
    name: 'Southern Runner',
    length: 7,
    cost: '$899',
    countries_visited: ['France', 'Spain'],
    link: 'https://www.topdeck.travel/tours/southern-runner',
    // France
    primary_country_id: '5ca3c7c3143e781b614f0059',
  },
  {
    company: './images/g-adventures-seeklogo.com.svg',
    name: 'Sailing Greece',
    length: 8,
    cost: '$929',
    countries_visited: ['Greece'],
    link: 'https://www.gadventures.com/trips/sailing-greece-santorini-to-mykonos/GVSM/',
    // Greece
    primary_country_id: '5ca3c7c3143e781b614f005a',
  },
  {
    company: './images/contiki-logo-vector.svg',
    name: 'Greek Island Hopping',
    length: 13,
    cost: '$2420',
    countries_visited: ['Greece'],
    link: 'https://www.contiki.com/us/en/destinations/europe/tours/greek-island-hopping-131',
    // Greece
    primary_country_id: '5ca3c7c3143e781b614f005a',
  },
  {
    company: './images/topdeck-travel-logo.png',
    name: 'Greece Lightning',
    length: 7,
    cost: '$1097',
    countries_visited: ['Greece'],
    link: 'https://www.topdeck.travel/tours/greece-lightning',
    // Greece
    primary_country_id: '5ca3c7c3143e781b614f005a',
  },
  {
    company: './images/g-adventures-seeklogo.com.svg',
    name: 'Walk the Camino de Santiago',
    length: 8,
    cost: '$1019',
    countries_visited: ['Spain'],
    link: 'https://www.gadventures.com/trips/walk-the-camino-de-santiago/ESCS/',
    // Spain
    primary_country_id: '5ca3c7c3143e781b614f005d',
  },
  {
    company: './images/contiki-logo-vector.svg',
    name: 'Spanish Spree',
    length: 14,
    cost: '$1799',
    countries_visited: ['Spain'],
    link: 'https://www.contiki.com/us/en/destinations/europe/tours/spanish-spree-155',
    // Spain
    primary_country_id: '5ca3c7c3143e781b614f005d',
  },
  {
    company: './images/flashpack.png',
    name: 'Vespa the Spanish countryside',
    length: 4,
    cost: '$2134',
    countries_visited: ['Spain'],
    link: 'https://www.flashpack.com/adventure-trips/vespa-road-trip/',
    // Spain
    primary_country_id: '5ca3c7c3143e781b614f005d',
  },
  {
    company: './images/topdeck-travel-logo.png',
    name: 'Southern Runner',
    length: 7,
    cost: '$899',
    countries_visited: ['France', 'Spain'],
    link: 'https://www.topdeck.travel/tours/southern-runner',
    // Spain
    primary_country_id: '5ca3c7c3143e781b614f005d',
  },
  {
    company: './images/g-adventures-seeklogo.com.svg',
    name: 'Cruise the Norwegian Fjords In Depth - Tromso to Bergen',
    length: 11,
    cost: '$3349',
    countries_visited: ['Norway'],
    link: 'https://www.gadventures.com/trips/cruise-the-norwegian-fjords-in-depth-tromso-bergen/XVNFNX/',
    // Norway
    primary_country_id: '5ca3c7c3143e781b614f005c',
  },
  {
    company: './images/contiki-logo-vector.svg',
    name: 'Scandinavia',
    length: 10,
    cost: '$2035',
    countries_visited: ['Norway', 'Germany', 'Denmark', 'Sweden'],
    link: 'https://www.contiki.com/us/en/destinations/europe/tours/scandinavia-end-stockholm-241',
    // Norway
    primary_country_id: '5ca3c7c3143e781b614f005c',
  },
  {
    company: './images/flashpack.png',
    name: 'Head off-piste in beautiful Norway',
    length: 5,
    cost: '$2424',
    countries_visited: ['Norway'],
    link: 'https://www.flashpack.com/adventure-trips/norway-small-group-tour-solo-travellers/',
    // Norway
    primary_country_id: '5ca3c7c3143e781b614f005c',
  },
  {
    company: './images/topdeck-travel-logo.png',
    name: 'Winter Scandi Express',
    length: 8,
    cost: '$979',
    countries_visited: ['Norway', 'Denmark', 'Sweden'],
    link: 'https://www.topdeck.travel/tours/winter-scandi-express',
    // Norway
    primary_country_id: '5ca3c7c3143e781b614f005c',
  },
  {
    company: './images/g-adventures-seeklogo.com.svg',
    name: 'Trekking Mont Blanc',
    length: 10,
    cost: '$1699',
    countries_visited: ['France', 'Switzerland', 'Italy'],
    link: 'https://www.gadventures.com/trips/trekking-mont-blanc/EFMB/',
    // Italy
    primary_country_id: '5ca3c7c3143e781b614f005b',
  },
  {
    company: './images/contiki-logo-vector.svg',
    name: 'Simply Italy',
    length: 12,
    cost: '$1799',
    countries_visited: ['Italy'],
    link: 'https://www.contiki.com/us/en/destinations/europe/tours/simply-italy-152',
    // Italy
    primary_country_id: '5ca3c7c3143e781b614f005b',
  },
  {
    company: './images/flashpack.png',
    name: 'Soothe your soul in Sicily',
    length: 7,
    cost: '$3304',
    countries_visited: ['Italy'],
    link: 'https://www.flashpack.com/adventure-trips/sicily-small-group-tour-solo-travellers/',
    // Italy
    primary_country_id: '5ca3c7c3143e781b614f005b',
  },
  {
    company: './images/topdeck-travel-logo.png',
    name: 'Western Inspiration',
    length: 8,
    cost: '$939',
    countries_visited: ['Italy', 'France', 'Switzerland', 'Vatican City'],
    link: 'https://www.topdeck.travel/tours/western-inspiration',
    // Italy
    primary_country_id: '5ca3c7c3143e781b614f005b',
  },
  // =================  North America tours  =================
  {
    company: './images/g-adventures-seeklogo.com.svg',
    name: 'Mayan Adventure',
    length: 22,
    cost: '$2319',
    countries_visited: ['Belize', 'Guatemala', 'Mexico'],
    link: 'https://www.gadventures.com/trips/mayan-adventure/CAM/',
    // Belize
    primary_country_id: '5ca3c7c3143e781b614f005e',
  },
  {
    company: './images/contiki-logo-vector.svg',
    name: 'Caribbean Encounter',
    length: 10,
    cost: '$2179',
    countries_visited: ['Belize', 'Guatemala', 'Mexico'],
    link: 'https://www.contiki.com/us/en/destinations/latin-america/tours/caribbean-encounter-from-dec2019-3865',
    // Belize
    primary_country_id: '5ca3c7c3143e781b614f005e',
  },
  {
    company: './images/flashpack.png',
    name: 'Jungle thrills and beach chills in Belize',
    length: 5,
    cost: '$2424',
    countries_visited: ['Belize'],
    link: 'https://www.flashpack.com/adventure-trips/belize-small-group-tour-solo-travellers/',
    // Belize
    primary_country_id: '5ca3c7c3143e781b614f005e',
  },
  {
    company: './images/g-adventures-seeklogo.com.svg',
    name: 'National Parks of the Canadian Rockies',
    length: 14,
    cost: '$2167',
    countries_visited: ['Canada'],
    link: 'https://www.gadventures.com/trips/national-parks-of-the-canadian-rockies-eastbound/NCUR/',
    // Canada
    primary_country_id: '5ca3c7c3143e781b614f005f',
  },
  {
    company: './images/contiki-logo-vector.svg',
    name: 'Grand Canadian',
    length: 20,
    cost: '$3729',
    countries_visited: ['Canada'],
    link: 'https://www.contiki.com/us/en/destinations/usa-canada/tours/grand-canadian-260',
    // Canada
    primary_country_id: '5ca3c7c3143e781b614f005f',
  },
  {
    company: './images/flashpack.png',
    name: 'The ultimate winter adventure in Canada',
    length: 7,
    cost: '$2434',
    countries_visited: ['Canada'],
    link: 'https://www.flashpack.com/adventure-trips/canada-winter-small-group-adventure-solo-travellers/',
    // Canada
    primary_country_id: '5ca3c7c3143e781b614f005f',
  },
  {
    company: './images/topdeck-travel-logo.png',
    name: 'The Maple Trail',
    length: 8,
    cost: '$1239',
    countries_visited: ['Canada', 'United States'],
    link: 'https://www.topdeck.travel/tours/the-maple-trail',
    // Canada
    primary_country_id: '5ca3c7c3143e781b614f005f',
  },
  {
    company: './images/g-adventures-seeklogo.com.svg',
    name: 'Mayan Adventure',
    length: 22,
    cost: '$2319',
    countries_visited: ['Belize', 'Guatemala', 'Mexico'],
    link: 'https://www.gadventures.com/trips/mayan-adventure/CAM/',
    // Mexico
    primary_country_id: '5ca3c7c3143e781b614f0062',
  },
  {
    company: './images/contiki-logo-vector.svg',
    name: 'Latin Legends',
    length: 14,
    cost: '$4595',
    countries_visited: ['Belize', 'Guatemala', 'Mexico'],
    link: 'https://www.contiki.com/us/en/destinations/latin-america/tours/latin-legends-until-nov2019-1796',
    // Mexico
    primary_country_id: '5ca3c7c3143e781b614f0062',
  },
  {
    company: './images/flashpack.png',
    name: 'Wild swim the Yucatan Peninsula',
    length: 11,
    cost: '$3629',
    countries_visited: ['Mexico'],
    link: 'https://www.flashpack.com/adventure-trips/yucatan-small-group-adventure-solo-travellers/',
    // Mexico
    primary_country_id: '5ca3c7c3143e781b614f0062',
  },
  {
    company: './images/g-adventures-seeklogo.com.svg',
    name: 'Mayan Adventure',
    length: 22,
    cost: '$2319',
    countries_visited: ['Belize', 'Guatemala', 'Mexico'],
    link: 'https://www.gadventures.com/trips/mayan-adventure/CAM/',
    // Guatemala
    primary_country_id: '5ca3c7c3143e781b614f0061',
  },
  {
    company: './images/contiki-logo-vector.svg',
    name: 'Sol Seeker',
    length: 13,
    cost: '$3175',
    countries_visited: ['Belize', 'Guatemala', 'Mexico'],
    link: 'https://www.contiki.com/us/en/destinations/latin-america/tours/sol-seeker-until-nov2019-1816',
    // Guatemala
    primary_country_id: '5ca3c7c3143e781b614f0061',
  },
  {
    company: './images/flashpack.png',
    name: 'Volcanoes & jungles in Guatemala and Belize',
    length: 12,
    cost: '$4409',
    countries_visited: ['Belize', 'Guatemala'],
    link: 'https://www.flashpack.com/adventure-trips/guatemala-belize-small-group-adventure-solo-travellers/',
    // Guatemala
    primary_country_id: '5ca3c7c3143e781b614f0061',
  },
  {
    company: './images/g-adventures-seeklogo.com.svg',
    name: 'Costa Rica Quest',
    length: 9,
    cost: '$979',
    countries_visited: ['Costa Rica'],
    link: 'https://www.gadventures.com/trips/costa-rica-quest/CRQ/',
    // Costa Rica
    primary_country_id: '5ca3c7c3143e781b614f0060',
  },
  {
    company: './images/contiki-logo-vector.svg',
    name: 'Playas of Paradise',
    length: 22,
    cost: '$4739',
    countries_visited: ['Costa Rica', 'Mexico', 'Belize', 'Guatemala'],
    link: 'https://www.contiki.com/us/en/destinations/latin-america/tours/playas-of-paradise-until-nov2019-3676',
    // Costa Rica
    primary_country_id: '5ca3c7c3143e781b614f0060',
  },
  {
    company: './images/flashpack.png',
    name: 'Waterfalls and wildlife in Costa Rica',
    length: 11,
    cost: '$3089',
    countries_visited: ['Costa Rica'],
    link: 'https://www.flashpack.com/adventure-trips/costa-rica-small-group-tour-solo-travellers/',
    // Costa Rica
    primary_country_id: '5ca3c7c3143e781b614f0060',
  },
  {
    company: './images/g-adventures-seeklogo.com.svg',
    name: 'Best of the West',
    length: 15,
    cost: '$2023',
    countries_visited: ['United States'],
    link: 'https://www.gadventures.com/trips/best-of-the-west/NUBW/',
    // United States
    primary_country_id: '5ca3c7c3143e781b614f0063',
  },
  {
    company: './images/contiki-logo-vector.svg',
    name: 'Epic Adventure',
    length: 55,
    cost: '$9235',
    countries_visited: ['United States', 'Canada'],
    link: 'https://www.contiki.com/us/en/destinations/usa-canada/tours/epic-adventure-3808',
    // United States
    primary_country_id: '5ca3c7c3143e781b614f0063',
  },
  {
    company: './images/flashpack.png',
    name: 'Get on down in Deep South USA',
    length: 8,
    cost: '$2794',
    countries_visited: ['United States'],
    link: 'https://www.flashpack.com/adventure-trips/deep-south-usa-small-group-adventure-solo-travellers/',
    // United States
    primary_country_id: '5ca3c7c3143e781b614f0063',
  },
  {
    company: './images/topdeck-travel-logo.png',
    name: 'Vegas to the Bay',
    length: 7,
    cost: '$1079',
    countries_visited: ['United States'],
    link: 'https://www.topdeck.travel/tours/vegas-to-the-bay-finish-la',
    // United States
    primary_country_id: '5ca3c7c3143e781b614f0063',
  },
  // =================  South America tours  =================
  {
    company: './images/g-adventures-seeklogo.com.svg',
    name: 'Falklands, South Georgia & Antarctica',
    length: 22,
    cost: '$12299',
    countries_visited: ['Argentina', 'Falkland Islands', 'Antarctica', 'Uruguay'],
    link: 'https://www.gadventures.com/trips/falklands-south-georgia-and-antarctica/XVGFSX/',
    // Argentina
    primary_country_id: '5ca3c7c3143e781b614f0064',
  },
  {
    company: './images/contiki-logo-vector.svg',
    name: 'The Explorer',
    length: 18,
    cost: '$4039',
    countries_visited: ['Argentina', 'Brazil', 'Peru'],
    link: 'https://www.contiki.com/us/en/destinations/latin-america/tours/the-explorer-until-jan2020-2826',
    // Argentina
    primary_country_id: '5ca3c7c3143e781b614f0064',
  },
  {
    company: './images/flashpack.png',
    name: 'Al fresco adventure in Argentina',
    length: 11,
    cost: '$3769',
    countries_visited: ['Argentina'],
    link: 'https://www.flashpack.com/adventure-trips/argentina-small-group-adventure-solo-travellers/',
    // Argentina
    primary_country_id: '5ca3c7c3143e781b614f0064',
  },
  {
    company: './images/g-adventures-seeklogo.com.svg',
    name: 'Ecuador Beaches and Coastal Adventure',
    length: 7,
    cost: '$637',
    countries_visited: ['Ecuador'],
    link: 'https://www.gadventures.com/trips/ecuador-beaches-and-coastal-adventure/SECE/',
    // Ecuador
    primary_country_id: '5ca3c7c3143e781b614f0067',
  },
  {
    company: './images/contiki-logo-vector.svg',
    name: 'The Lava Line with ME to WE',
    length: 7,
    cost: '$1455',
    countries_visited: ['Ecuador'],
    link: 'https://www.contiki.com/us/en/destinations/latin-america/tours/the-lava-line-with-me-to-we-3576',
    // Ecuador
    primary_country_id: '5ca3c7c3143e781b614f0067',
  },
  {
    company: './images/g-adventures-seeklogo.com.svg',
    name: 'In Search of Iguassu',
    length: 17,
    cost: '$2252',
    countries_visited: ['Brazil', 'Argentina', 'Uruguay'],
    link: 'https://www.gadventures.com/trips/in-search-of-iguassu-buenos-aires-to-rio/JBR/',
    // Brazil
    primary_country_id: '5ca3c7c3143e781b614f0065',
  },
  {
    company: './images/contiki-logo-vector.svg',
    name: 'Argentina & Brazil Experience',
    length: 9,
    cost: '$1615',
    countries_visited: ['Brazil', 'Argentina'],
    link: 'https://www.contiki.com/us/en/destinations/latin-america/tours/argentina-brazil-experience-2836',
    // Brazil
    primary_country_id: '5ca3c7c3143e781b614f0065',
  },
  {
    company: './images/flashpack.png',
    name: 'Beach life and island-hopping in Brazil',
    length: 9,
    cost: '$3604',
    countries_visited: ['Brazil'],
    link: 'https://www.flashpack.com/adventure-trips/brazil-small-group-tour-solo-travellers/',
    // Brazil
    primary_country_id: '5ca3c7c3143e781b614f0065',
  },
  {
    company: './images/g-adventures-seeklogo.com.svg',
    name: 'Galapagos Express',
    length: 7,
    cost: '$1402',
    countries_visited: ['Galapagos Islands', 'Ecuador'],
    link: 'https://www.gadventures.com/trips/galapagos-express/SEGB/',
    // Galapagos Islands
    primary_country_id: '5ca3c7c3143e781b614f0068',
  },
  {
    company: './images/contiki-logo-vector.svg',
    name: 'Galapagos Island Hopper',
    length: 6,
    cost: '$2475',
    countries_visited: ['Galapagos Islands', 'Ecuador'],
    link: 'https://www.contiki.com/us/en/destinations/latin-america/tours/galapagos-island-hopper-1766',
    // Galapagos Islands
    primary_country_id: '5ca3c7c3143e781b614f0068',
  },
  {
    company: './images/g-adventures-seeklogo.com.svg',
    name: 'Colombia Multisport & Lost City Trek',
    length: 17,
    cost: '$2660',
    countries_visited: ['Colombia'],
    link: 'https://www.gadventures.com/trips/colombia-multisport/SMCA/',
    // Colombia
    primary_country_id: '5ca3c7c3143e781b614f0066',
  },
  {
    company: './images/contiki-logo-vector.svg',
    name: 'Hola Colombia',
    length: 18,
    cost: '$2999',
    countries_visited: ['Colombia'],
    link: 'https://www.contiki.com/us/en/destinations/latin-america/tours/hola-colombia-3861',
    // Colombia
    primary_country_id: '5ca3c7c3143e781b614f0066',
  },
  {
    company: './images/flashpack.png',
    name: 'A brave new world in Colombia',
    length: 13,
    cost: '$3859',
    countries_visited: ['Colombia'],
    link: 'https://www.flashpack.com/adventure-trips/come-to-colombia/',
    // Colombia
    primary_country_id: '5ca3c7c3143e781b614f0066',
  },
  {
    company: './images/g-adventures-seeklogo.com.svg',
    name: 'Amazon to the Andes',
    length: 12,
    cost: '$2749',
    countries_visited: ['Peru'],
    link: 'https://www.gadventures.com/trips/amazon-to-the-andes/PAA/',
    // Peru
    primary_country_id: '5ca3c7c3143e781b614f0069',
  },
  {
    company: './images/contiki-logo-vector.svg',
    name: 'Peru Uncovered',
    length: 14,
    cost: '$2825',
    countries_visited: ['Peru'],
    link: 'https://www.contiki.com/us/en/destinations/latin-america/tours/peru-uncovered-2746',
    // Peru
    primary_country_id: '5ca3c7c3143e781b614f0069',
  },
  {
    company: './images/flashpack.png',
    name: 'Venture into the soul of Peru',
    length: 8,
    cost: '$2569',
    countries_visited: ['Peru'],
    link: 'https://www.flashpack.com/adventure-trips/peru-express-small-group-tour-solo-travellers/',
    // Peru
    primary_country_id: '5ca3c7c3143e781b614f0069',
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