const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
  region_id: Number,
  countryName: String,
  countryPhoto: String
});

// .model('modelName', schema)
const Country = mongoose.model('Country', CountrySchema);
module.exports = Country;