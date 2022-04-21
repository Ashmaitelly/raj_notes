const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://Raj_notes:MEC-Horizons123@cluster0.vzwl8.mongodb.net/rajnotes?retryWrites=true&w=majority"
  );

module.exports = mongoose;