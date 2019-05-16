const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GithubStrategy = require('passport-github').Strategy;
const bcrypt = require('bcryptjs');
const User = require('../models/User');



passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
},
  (username, password, done) => {
    User.findOne({ username })
      .then(foundUser => {
        if (!foundUser) {
          done(null, false, { message: 'Incorrect username' });
          return;
        }

        if (!bcrypt.compareSync(password, foundUser.password)) {
          done(null, false, { message: 'Incorrect password' });
          return;
        }

        done(null, foundUser);
      })
      .catch(err => done(err));
  }
));

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret,
      callbackURL: 'http://localhost:5000/api/github/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      User.findOne({ githubId: profile.id })
        .then(user => {
          if (user) return done(null, user);
          User.create({
            githubId: profile.id,
            username: profile.username,
            imgPath: profile.photos[0].value
          }).then(newUser => {
            done(null, newUser);
          });
        })
        .catch(err => {
          done(err);
        });
    }
  )
)
