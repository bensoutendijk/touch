const mongoose = require('mongoose')
const { Schema } = mongoose


const postSchema = new Schema({
  // user_id: {type: Number, required: true},
  title: {type: String},
  body: {type: String},
  repo_name: {type: String}
});

mongoose.model('Post', postSchema);
