const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = app => {
  app.post(
    '/auth',
    passport.authenticate('local', {

    }),
    (req, res) => {
      res.send({ auth: true });
    }
  );

  app.get(
    '/auth/callback',
    async (req,res) => {
      console.log('auth/callback called');
    }
  )

  app.post(
    '/auth/new',
    async (req, res) => {
      const { username, password } = req.body;
  
      const user = new User({
        username: username,
        password: password
      });
  
      try {
        await user.save();
        res.send({ auth: true, user: user });
      } catch (err) {
        if (err.code === 11000) { res.send({ message: 'Username already taken' }); }
        res.status(400).send(err);
      }
    }
  )

  app.get('/auth/logout', (req, res) => {
    req.logout();
    res.send({ message: 'logged out' });
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
