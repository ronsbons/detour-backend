const express = require('express');
const router = express.Router();

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
// [] NEED TO PUT BEHIND AUTHORIZATION MIDDLEWARE
// get one user
router.get('/:id', controllers.user.showOneUser);
// add saved tour 
router.put('/:id/add-saved-tour', controllers.user.addTour);
// remove saved tour
router.put('/:id/remove-saved-tour', controllers.user.removeTour);
// edit user
router.put('/:id', controllers.user.edit);


module.exports = router;