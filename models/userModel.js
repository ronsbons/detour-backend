const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    // (?=.{4,20}$) length between 4-20
    // (?![.]) no or . at the beginning of username
    // (?!.*[_.]{2}) no __ or _. or .. inside username
    // [a-zA-Z0-9._] allowed characters a-z, 0-9, . and _
    // (?<![.]) no . at the end of username
    match: /^(?=.{4,20}$)(?![.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![.])$/
  },
  saved_tour_id: [{
    type: Schema.Types.ObjectId,
    ref: 'Tours'
  }],
});

// passportLocalMongoose should take care of hashing password
// UserSchema.plugin(passportLocalMongoose);
// [] TAKING OUT, BECAUSE DON'T KNOW WHERE TO PUT mongoose.connect('mongodb://localhost/passport_local_mongoose_express4');
// [] DOES THAT REPLACE MY EXISTING MONGOOSE.CONNECT IN INDEX.JS?

// backup method to delete password from the database result
UserSchema.set('toJSON', {
  // document, return, option
  transform: function(doc, ret, opt) {
    delete ret['password'];
    return ret;
  },
});

// .model('modelName', schema)
const User = mongoose.model('User', UserSchema);
module.exports = User;