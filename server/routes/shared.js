const router = require('express').Router();

const NoteModel = require('../models/note');

const authenticateToken = require('../authenticateToken');

//get shared user notes
router.get('/', authenticateToken, (req, res) => {
  const viewer = req.user.name;
  NoteModel.find({ shared: true, shared_users: viewer, soft_deleted: false })
    .select('title date_modified text bgc author')
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
    shared: true,
    soft_deleted: false,
    shared_users: { $in: req.user.name },
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

module.exports = router;
