const router = require("express").Router();

const NoteModel = require("../models/note");

//get soft deleted user notes
router.get("/", (req, res) => {
  NoteModel.find({ shared: true, shared_users: "b" })
    .select("title date_modified text bgc")
    .then((result) => {
      res.json(result);
    })
    .catch((err) => res.status(500).json({ error: err }));
});

//get specific note
router.get("/:id", (req, res) => {
  const _id = req.params.id;
  NoteModel.findOne({ _id: _id, shared: true })
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
