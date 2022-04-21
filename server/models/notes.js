const mongoose = require('../connect');


const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  date_modified: { 
    type: Date, 
    default: Date.now 
  },
  soft_deleted: {
    type: Boolean,
    default: false
  },
  shared: {
    type: Boolean,
    default: false
  },

});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
