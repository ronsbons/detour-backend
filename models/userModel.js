const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
  email: String,
  password: String,
  username: String,
  saved_tour_id: {
    type: Schema.Types.ObjectId,
    ref: 'Tours'
  },
});

// passportLocalMongoose should take care of hashing password
// UserSchema.plugin(passportLocalMongoose);
// [] TAKING OUT, BECAUSE DON'T KNOW WHERE TO PUT mongoose.connect('mongodb://localhost/passport_local_mongoose_express4');
// [] DOES THAT REPLACE MY EXISTING MONGOOSE.CONNECT IN INDEX.JS?

// .model('modelName', schema)
const User = mongoose.model('User', UserSchema);
module.exports = User;