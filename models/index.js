const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/detour', { useNewUrlParser: true });

module.exports.Country = require('./countryModel.js');
module.exports.Tours = require('./tourModel.js');
module.exports.User = require('./userModel.js');