const router = require('express').Router();

const NoteModel = require('../models/note');

//get user notes
router.get("/", (req, res) => {
    console.log(req.body);
    NoteModel.find({})
    .then(result => {
        res.json(result);
    })
    .catch(err => res.status(500).json({ error: err }));
  });
// new note
router.post("/Create", async (req, res) => {
  const note = req.body;
  console.log("start");
  try {
  const newNote = new NoteModel(note);
  await newNote.save();
  res.json(note);
  }
  catch{err => res.status(500).json({ error: err })}
});

module.exports = router;