const mongoose = require('mongoose')
const axios = require('axios')

const Post = mongoose.model('Post')

module.exports = app => {

  app.get('/api/posts', async (req, res) => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return res.send(data)
  })

  app.get('/api/posts/:type', async (req, res) => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    switch (req.params.type) {
      case 'featured': return res.send(data.slice(5,8))
      default: return res.send(data)
    }
  })

  app.get('/api/posts/:id', async (req, res) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`)
    return res.send(data)
  })

};
