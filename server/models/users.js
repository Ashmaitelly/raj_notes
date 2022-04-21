const mongoose = require('../connect');


const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
