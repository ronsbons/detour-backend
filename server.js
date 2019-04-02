const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const countryRoutes = require('./routes/country.js');
const tourRoutes = require('./routes/tours.js');

// will access index.js in models automatically
// const db = require('./models');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }) );
app.use(bodyParser.json());
app.use(cors());

app.use('/country', countryRoutes);
app.use('/tours', tourRoutes);

// serve the 'public' folder in the frontend which has 'index.html', which index.js puts components into
app.use(express.static('public'));

// test response to send to front end when it connects to backend
app.get('/', (request, response) => response.send('hello, backend'));


app.listen(process.env.PORT || 3001, () =>
  console.log('Listening on port 3001 :)')
);
