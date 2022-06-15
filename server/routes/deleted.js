const router = require('express').Router();

const NoteModel = require('../models/note');

const authenticateToken = require('../authenticateToken');

//get soft deleted user notes
router.get('/', authenticateToken, (req, res) => {
  const author = res.locals.auth.user.name;
  NoteModel.find({ soft_deleted: true, author: author })
    .sort({ date_modified: 'desc' })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => res.status(500).json({ error: err }));
});

//get specific note
router.get('/:id', authenticateToken, (req, res) => {
  const _id = req.params.id;
  NoteModel.findOne({
    _id: _id,
    author: res.locals.auth.user.name,
    soft_deleted: true,
  })
    .then((result) => {
      if (!result) {
        res.status(404).json();
      } else {
        res.json(result);
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});

//delete note
router.delete('/delete/:id', authenticateToken, async (req, res) => {
  const _id = req.params.id;
  NoteModel.deleteOne({
    _id: _id,
    author: res.locals.auth.user.name,
    soft_deleted: true,
  })
    .then((result) => {
      res.json('Sucessfully deleted');
    })
    .catch((err) => res.status(500).json({ error: err }));
});
//restore the note
router.put('/restore/:id', (req, res) => {
  const _id = req.params.id;
  NoteModel.findOneAndUpdate(
    { _id: _id, soft_deleted: true },
    {
      soft_deleted: false,
      date_modified: Date.now(),
      expiresAt: Date.now() + 63113904000000,
    }
  )
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
