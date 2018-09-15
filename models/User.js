const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
  username: {type: String, unique: true, required: true},
  password: {type: String, unique: true, required: true}
});

userSchema.methods = {
  verifyPassword: function(password){
    return bcrypt.compareSync(password, this.password);
  },
  hashPassword: password => {
    return bcrypt.hashSync(password, 10);
  }
};

userSchema.pre('save', function(next) {
  if(!this.password){
    next();
  } else {
    this.password = this.hashPassword(this.password);
    next();
  }
})

mongoose.model('User', userSchema);
