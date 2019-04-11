# ![](DeTour-logo.png)
# DeTour

## Overview
[DeTour](http://protected-ravine-34035.herokuapp.com/) is a website where young travelers can compare tour offerings from the top companies offering group travel for 18-35 year olds.  Users can view tours by country and see a side-by-side of key information like which countries are visited and starting costs.  Users can choose to create an account to leave reviews sharing their experiences from a particular tour and to save tours they're interested in to view later.


## Technologies Used
Languages
- JavaScript

Database
- MongoDb
- Mongoose

Frameworks
- Node.js
- Express

Libraries
- bcrypt

Packages
- body-parser
- cors
- jsonwebtoken
- nodemon


## Installation
Frontend repo can be found [here](https://github.com/ronsbons/detour-frontend).

Clone and install this backend and its dependencies before installing the frontend.
`npm install`

Run `mongod` to open the connection with the database and `nodemon server.js` to begin the server connection on your localhost.

If you would like to use the countries and tours given, seed the database with the countries first.
`node seedCountry.js`

Because the tours reference a `primary_country_id`, you will need to get your newly created countries' unique IDs from the database using a program like [Postman](https://www.getpostman.com/).  The route to get all countries has been set up in `server.js` > `routes/country.js` > `controllers/countryController.js`.  Once you've gotten all countries results, replace the `primary_country_id`s in `seedTours.js` with these new IDs.


## User Stories, Wireframes, and ERD
User stories, wireframes, and the ERD can be found at this project's [Trello board](https://trello.com/b/hLycGwWy/capstone-project).


## Unsolved Problems and Future Features
- Editing user information

The regex match conditions do not take effect upon editing a user.

- Population of referenced models

Review what information is being used on the frontend to populate only certain fields of a model rather than the whole object.

- Routes for all CRUD functionality

Write routes for all CRUD functionality for all models for full admin capability.

- Route to summarize all available API endpoints

- Data scraping

To ensure all data is up-to-date and to add countries and tours dynamically vs. manually.
