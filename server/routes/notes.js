const router = require("express").Router();

const NoteModel = require("../models/note");

//get user notes
router.get("/", (req, res) => {
  const author = req.query.author;
  NoteModel.find({ soft_deleted: false, author: author })
    .select("title date_modified text bgc")
    .then((result) => {
      res.json(result);
    })
    .catch((err) => res.status(500).json({ error: err }));
});

//get specific note
router.get("/:id", (req, res) => {
  const author = req.query;
  const _id = req.params.id;
  NoteModel.findOne({ _id: _id, soft_deleted: false })
    .then((result) => {
      if (!result) {
        res.status(404).json();
      } else {
        res.json(result);
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});

// new note
router.post("/create", async (req, res) => {
  const note = req.body;
  try {
    const newNote = new NoteModel(note);
    await newNote.save();
    res.json(note);
  } catch {
    (err) => res.status(500).json({ error: err });
  }
});

// update note
router.put("/update/:id", (req, res) => {
  const _id = req.params.id;
  const note = req.body;
  const update = {
    title: note.title,
    text: note.text,
    date_modified: Date.now(),
  };
  NoteModel.findOneAndUpdate({ _id: _id, soft_deleted: false }, update)
    .then((result) => {
      if (!result) {
        res.status(404).json();
      } else {
        res.json(result);
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
