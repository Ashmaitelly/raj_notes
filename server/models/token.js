const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
});

const TokenModel = mongoose.model('token', TokenSchema);
module.exports = TokenModel;
