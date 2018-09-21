const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  githubId: String
});

mongoose.model('User', userSchema);
