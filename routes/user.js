const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const controllers = require('../controllers');

// sign up
router.post('/signup', controllers.user.signup);
// login
router.post('/login', controllers.user.login);


module.exports = router;