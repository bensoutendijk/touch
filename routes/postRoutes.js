const mongoose = require('mongoose');
const Post = mongoose.model('Post');

module.exports = app => {
  app.get('/posts', (req, res) => {
      console.log('getting posts...')
  })
};
