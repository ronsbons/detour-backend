const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  content: String,
  rating: Number,
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  country_id: {
    type: Schema.Types.ObjectId,
    ref: 'Country',
  },
});

// .model('modelName', schema)
const Reviews = mongoose.model('Reviews', ReviewSchema);
module.exports = Reviews;