const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const controllers = require('../controllers');

// sign up
router.post('/signup', controllers.user.signup);
// login
router.post('/login', controllers.user.login);


// admin routes
// get all users
router.get('/', controllers.user.showAllUsers);
// delete user
router.delete('/:id', controllers.user.delete);


// user routes
// middleware to intercept requests for routes that need jwt token/user auth
router.use( (request, response, next) => {
  console.log(`activating jwt middleware on user routes`);
  // access headers from front-end request
  const bearerHeader = request.headers['authorization'];
  console.log(`token check: ${bearerHeader}`);

  // if there is a value in bearerHeader, then...
  if (typeof bearerHeader !== 'undefined') {
    // break up request header 'Bearer ${token}' into 'Bearer' and '${token}'
    const bearer = bearerHeader.split(' ');
    // store just the token part
    const bearerToken = bearer[1];
    // put the token in the request
    request.token = bearerToken;
    // verify token against secret key
    // if secret key is inside the signature part of the token, it will open the payload and have access to the user data that was added to the jwt in userController.js (email, username, _id)
    let verified = jwt.verify(request.token, 'essendon');
    console.log(`here is the verified _id: ${verified._id}`);
    request.userId = verified._id;
    // proceeds to routes after this middleware
    next();
  } else {
    response.sendStatus(403);
  };
});


// get one user
router.get('/:id', controllers.user.showOneUser);
// add saved tour 
router.put('/:id/add-saved-tour', controllers.user.addTour);
// remove saved tour
router.put('/:id/remove-saved-tour', controllers.user.removeTour);
// edit user
router.put('/:id', controllers.user.edit);


module.exports = router;