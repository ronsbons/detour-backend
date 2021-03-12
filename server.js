const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const countryRoutes = require('./routes/country.js');
const tourRoutes = require('./routes/tours.js');
const userRoutes = require('./routes/user.js');
const reviewRoutes = require('./routes/reviews.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }) );
app.use(bodyParser.json());
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use('/country', countryRoutes);
app.use('/tours', tourRoutes);
app.use('/user', userRoutes);
app.use('/reviews', reviewRoutes);

// serve the 'public' folder in the frontend which has 'index.html', which index.js puts components into
app.use(express.static('public'));


// test response to send to front end when it connects to backend
app.get('/', (request, response) => response.send('hello, backend'));
app.get('/tours/', (request, response) => {
  db.Tours.find({}, (error, foundTours) => {
    if (error) {
      console.log(`can't get all tours: ${error}`);
    }
    response.json(foundTours);
    console.log(`found all tours: ${foundTours}`);
  })
});


app.listen(process.env.PORT || 3001, () =>
  console.log('Listening on port 3001 :)')
);
