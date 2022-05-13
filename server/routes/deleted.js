const router = require('express').Router();

const NoteModel = require('../models/note');

//get soft deleted user notes
router.get("/", (req, res) => {
  const author= req.query.author;
    NoteModel.find({soft_deleted: true, author: author})
    .then(result => {
        res.json(result);
    })
    .catch(err => res.status(500).json({ error: err }));
  });

//get specific note
router.get("/:id", (req, res) => {
  const _id = req.params.id
  NoteModel.findOne({_id: _id, soft_deleted: true})
  .then(result => {
    if(!result){
      res.status(404).json();
    }
    else{
      res.json(result);
    }
  })
  .catch(err => res.status(500).json({ error: err }));
});

// new note
router.delete("/delete/:id", async (req, res) => {
  const _id = req.params.id
  NoteModel.deleteOne({_id: _id})
  .then(result => {
      res.json('Sucessfully deleted');
  })
  .catch(err => res.status(500).json({ error: err }));
});
router.put("/update/:id", (req, res) => {
  const _id = req.params.id;
  NoteModel.findOneAndUpdate({ _id: _id, soft_deleted: true }, update)
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