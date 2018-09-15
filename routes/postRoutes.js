const mongoose = require('mongoose');
const axios = require('axios')

const Post = mongoose.model('Post');

module.exports = app => {
  app.get('/api/posts', async (req, res) => {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
      res.send(data)
  })
};
