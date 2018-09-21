const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('User');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GitHubStrategy(
    {
      callbackURL: '/auth/github/callback',
      clientID: keys.githubClientId,
      clientSecret: keys.githubClientSecret,
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({ githubId: profile.id });
        if (existingUser) {
          return done(null, existingUser);
        }
        const user = await new User({
          githubId: profile.id
        }).save();
        done(null, user);
      } catch (err) {
        done(err, null);
      }
    }
  )
);
