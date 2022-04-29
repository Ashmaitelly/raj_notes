const router = require('express').Router();

const NoteModel = require('../models/note');

//get user notes
router.get("/", (req, res) => {
    NoteModel.find({soft_deleted: false})
    .then(result => {
        res.json(result);
    })
    .catch(err => res.status(500).json({ error: err }));
  });

//get specific note
router.get("/:id", (req, res) => {
  const _id = req.params.id
  NoteModel.findById(_id)
  .then(result => {
      res.json(result);
  })
  .catch(err => res.status(500).json({ error: err }));
});

// new note
router.post("/Create", async (req, res) => {
  const note = req.body;
  try {
  const newNote = new NoteModel(note);
  await newNote.save();
  res.json(note);
  }
  catch{err => res.status(500).json({ error: err })}
});

module.exports = router;