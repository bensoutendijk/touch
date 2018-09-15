const express = require('express')
const app = express()
const mongoose = require('mongoose')
const keys = require('./config/keys')
const passport = require('passport')
const bodyParser = require('body-parser')
const axios = require('axios')

require('./models/User')
require('./models/Post')

require('./services/passport')

mongoose.Promise = global.Promise
mongoose.connect(keys.mongoURI, {useNewUrlParser: true})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(passport.initialize())
app.use(passport.session())

require('./routes/postRoutes')(app)
require('./routes/authRoutes')(app)
const PORT = 5000

app.listen(PORT, () => {
  console.log('Listening on port ', PORT)
})