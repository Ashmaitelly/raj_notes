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
  console.log(note);
  try {
    const newNote = new NoteModel(note);
    const savedNote = await newNote.save();
    return res.json(savedNote);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// update note
router.put("/update/:id", (req, res) => {
  const _id = req.params.id;
  const note = req.body;
  const update = {
    title: note.title,
    text: note.text,
    bgc: note.bgc,
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
// share with button activation
router.put("/share/:id", (req, res) => {
  const _id = req.params.id;
  const note = req.body;
  const update = {
    shared: true,
    $push: { shared_users: [note.user] },
  };
  NoteModel.findOneAndUpdate({ _id: _id }, update)
    .then((result) => {
      if (!result) {
        res.status(404).json();
      } else {
        res.status(200).json("Successfully shared");
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});
//remove button functionality
router.put("/delete/:id", (req, res) => {
  const _id = req.params.id;
  const update = {
   soft_deleted: true
  };
  NoteModel.findOneAndUpdate({ _id: _id }, update)
    .then((result) => {
      if (!result) {
        res.status(404).json();
      } else {
        res.status(200).json("Successfully deleted");
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});
//change color code here

module.exports = router;
