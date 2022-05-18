const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date_modified: {
    type: Date,
    default: Date.now,
  },
  soft_deleted: {
    type: Boolean,
    default: false,
  },
  shared: {
    type: Boolean,
    default: false,
  },
  author: {
    type: String,
    required: true,
  },
  bgc: {
    type: String,
    default: "white",
  },
  shared_users: {
    type: [String],
    default: [],
  },
  comments: {
    type: [
      {
        username: { type: String },
        comment: { type: String },
        time: { type: Date },
      },
    ],
    default: {},
  },
});

const NoteModel = mongoose.model("note", NoteSchema);
module.exports = NoteModel;
