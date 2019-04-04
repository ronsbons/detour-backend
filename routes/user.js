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


module.exports = router;