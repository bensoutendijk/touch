const mongoose = require('mongoose')
const axios = require('axios')

const Post = mongoose.model('Post')

module.exports = app => {

  app.get('/api/posts', async (req, res) => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return res.send(data)
  })

  app.get('/api/posts/featured', async (req, res) => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return res.send(data.slice(5,8))
  })

  app.get('/api/posts/:id', async (req, res) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`)
    return res.send(data)
  })

  app.post('/api/posts', async (req, res) => {
    const { title, body } = req.body

    const post = new Post({
      title,
      body,
      user_id: req.body.user.id,
      repo_name: req.body.repo_name
    })

    try {
      await post.save()
      res.send(post)
    } catch (err) {
      res.send(400, err)
    }
    
  })

};
