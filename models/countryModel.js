const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
  region_id: Number,
  locationName: String,
  locationPhoto: String
});

// .model('modelName', schema)
const Country = mongoose.model('Country', CountrySchema);
module.exports = Country;