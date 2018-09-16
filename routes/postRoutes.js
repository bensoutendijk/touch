const mongoose = require('mongoose')
const axios = require('axios')

const Post = mongoose.model('Post')

module.exports = app => {

  app.get('/api/posts', async (req, res) => {
    const posts = await Post.find({});
    return res.send(posts)
  })

  app.get('/api/posts/featured', async (req, res) => {
    const posts = await Post.find({});
    return res.send(posts.slice(0,3))
  })

  app.get('/api/posts/:id', async (req, res) => {
    const post = await Post.findOne({_id: req.params.id});
    return res.send(post)
  })

  app.post('/api/posts', async (req, res) => {
    const { title, body } = req.body

    const post = new Post({
      title,
      body,
      // user_id: req.body.user.id,
      repo_name: req.body.repo_name
    })

    try {
      await post.save()
      res.send(post)
    } catch (err) {
      res.status(400).send(err)
    }
    
  })

};
