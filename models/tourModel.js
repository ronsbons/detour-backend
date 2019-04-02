const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TourSchema = new Schema({
  company: String,
  name: String,
  length: Number,
  cost: String,
  countries_visited: [String],
  link: String,
  primary_country_id: {
    type: Schema.Types.ObjectId,
    ref: 'Country'
  },
});

// .model('modelName', schema)
const Tours = mongoose.model('Tours', TourSchema);
module.exports = Tours;