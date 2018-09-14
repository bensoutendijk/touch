const mongoose = require('mongoose')
const { Schema } = mongoose


const postSchema = new Schema({
  userId: {type: Number, required: true},
  id: {type: Number, unique: true, required: true},
  title: {type: String, required: true},
  body: {type: String, required: true}
});

mongoose.model('Post', postSchema);
