const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const db = require ('../models');

module.exports = {
  // create/signup a user
  signup: (request, response) => {
    console.log(`sign up request: ${request.body.email}`);
    // check to see if user already exists in db
    db.User.find( {email: request.body.email} )
      .exec()
      .then( (user) => {
        // if a user is found
        if (user.length >= 1) {
          console.log(`user already exists`);
          response.status(409).json({
            message: 'Email address already exists'
          });
        
        }

        // if a user is not found
        // bcrypt hash the plaintext password from the request
        bcrypt.hash(request.body.password, 10, (error, hash) => {
          if (error) {
            console.log(`hashing error`);
            response.status(200).json({error: error});
          // if password successfully hashed
          } else {
            // create user in the database
            db.User.create({
              email: request.body.email,
              password: hash,
              username: request.body.username,
            }, (error, newUser) => {
              if (error) {
                console.log(`creating user error ${error}`);
              };
              
              console.log(`new user: ${newUser}`);

              // store new user data into a variable to be used in jwt
              let user = {
                email: newUser.email,
                username: newUser.username,
                _id: newUser._id,
              };
              console.log(`user payload for jwt: ${user}`);

              // create jwt token
              // user is the payload
              jwt.sign(user, 'essendon', {expiresIn: '1h'}, (error, signedJwt) => {
                if (error) {
                  console.log(`signup jwt.sign error ${error}`);
                };

                console.log(`jwt token created with signedJwt: ${signedJwt}`);
                response.status(200).json({
                  message: 'User created',
                  user,
                  signedJwt
                });
              });  // end of jwt.sign
            });  // end of db.User.create
          };  // end of else condition in bcrypt.hash
        });  // end of bcrypt.hash 
      // end of db.User.find.then
      }).catch( (error) => {
        console.log(`signup db.Users.catch ${error}`);
        response.status(500).json({error: error});
      });
  },

  login: (request, response) => {
    console.log(`login request: ${request.body.username}`);
    db.User.find( {username: request.body.username} )
      .select('+password')
      .populate('saved_tour_id')
      .exec()
      .then( (users) => {
        // if no users found
        if (users.length < 1) {
          console.log(`no users found on login`);
          response.status(401).json({
            message: 'Email/Password incorrect',
          });
        };

        console.log(`found user(s): ${users}`);
        // if a user is found
        // compare plaintext password to hashed password in db
        // .compare will automatically hash the plaintext password
        bcrypt.compare(request.body.password, users[0].password, (error, match) => {
          if (error) {
            console.log(`bcrypt compare error: ${error}`);
            response.status(500).json({error: error});
          };

          // if passwords match
          if (match) {
            console.log(`passwords match: ${match}`);
            // store user info into variable for jwt token
            let user = {
              username: users[0].username,
              email: users[0].email,
              _id: users[0]._id
            };

            // create jwt
            jwt.sign(user, 'essendon', {expiresIn: '1h'}, (error, signedJwt) => {
              if (error) {
                console.log(`login sign jwt error: ${error}`);
              };

              console.log(`successful jwt: ${signedJwt}`);
              console.log('login successful');
              // successful jwt
              response.status(200).json({
                message: 'Login successful',
                user,
                signedJwt,
              });
            }); // end of jwt.sign
          // if passwords don't match
          } else {
            console.log(`passwords don't match`);
            response.status(401).json({
              message: 'Email/Password incorrect',
            });
          };
        })  // end of bcrypt.compare
      // end of .then
      }).catch( (error) => {
        console.log(`login db.User.find.catch ${error}`);
        response.status(500).json({error: error});
      });
  },

  showAllUsers: (request, response) => {
    db.User.find({}).populate('saved_tour_id')
      .exec()
      .then( (foundUsers) => {
        console.log(`all users ${foundUsers}`);
        response.json(foundUsers);
      }).catch( (error) => {
        console.log(`can't get all users ${error}`);
      });
  },

  delete: (request, response) => {
    console.log(`delete user by id: ${request.params.id}`);
    // find user by _id
    db.User.findOneAndDelete({_id: request.params.id}, (error, deletedUser) => {
      if (error) {
        console.log(`can't delete user: ${error}`);
      }
      response.json(deletedUser);
      console.log(`deleted user: ${deletedUser}`);
    });
  },

  showOneUser: (request, response) => {
    console.log(`get one user: ${request.params.id}`);
    // find user by id
    db.User.findOne({_id: request.params.id})
      // bring in saved tour info
      .populate('saved_tour_id')
      .exec()
      .then( (foundUser) => {
        console.log(`found one user: ${foundUser}`);
        response.json(foundUser);
      }).catch( (error) => {
        console.log(`can't find one user`);
        response.status(500).json({error: error});
      });
  },

  // add saved tour
  addTour: (request, response) => {
    console.log(`update user: ${request.params.id}`);
    db.User.findOneAndUpdate(
      // find user by id
      {_id: request.params.id},
      // update saved_tour_id array by pushing value into it
      // put saved tour id key/value pair in frontend's request.body ({saved_tour_id: "idString"})
      {$push: request.body},
      // return updated user
      { new: true }
    // bring in saved tour info
    ).populate('saved_tour_id')
      .exec()
      .then( (updatedUser) => {
        console.log(`updated user with saved tours: ${updatedUser}`);
        response.json(updatedUser);
      }).catch( (error) => {
        console.log(`update user push error: ${error}`);
        response.status(500).json({error: error});
      });
  },

  // remove saved tour
  removeTour: (request, response) => {
    console.log(`update user: ${request.params.id}`);
    db.User.findOneAndUpdate(
      // find user by _id
      {_id: request.params.id},
      // update saved_tour_id array by pulling a value from it
      // put saved tour key value pair in frontend's request.body ({saved_tour_id: "idString"});
      {$pull: request.body},
      // return updated user
      { new: true }
    // bring in tour info
    ).populate('saved_tour_id')
      .exec()
      .then( (updatedUser) => {
        console.log(`updated user with removing a saved tour: ${updatedUser}`);
        response.json(updatedUser);
      }).catch( (error) => {
        console.log(`update user pull error: ${error}`);
        response.status(500).json({error: error});
      });
  },
};