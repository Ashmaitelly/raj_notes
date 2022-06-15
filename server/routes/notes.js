const router = require('express').Router();

const NoteModel = require('../models/note');

const UserModel = require('../models/user');

const authenticateToken = require('../authenticateToken');

const refToken = require('../refToken');

//get user notes
router.get('/', authenticateToken, (req, res) => {
  NoteModel.find({ soft_deleted: false, author: res.locals.auth.user.name })
    .sort({ date_modified: 'desc' })
    .select('title date_modified text bgc author')
    .then((result) => {
      res.json({ result: result, token: res.locals.auth.token });
    })
    .catch((err) => res.status(500).json({ error: err }));
});

//get specific note
router.get('/:id', authenticateToken, (req, res) => {
  const _id = req.params.id;
  NoteModel.findOne({
    _id: _id,
    author: res.locals.auth.user.name,
    soft_deleted: false,
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

// new note
router.post('/create', authenticateToken, async (req, res) => {
  const note = {
    title: req.body.title,
    text: req.body.text,
    bgc: req.body.bgc,
  };
  note.author = res.locals.auth.user.name;
  note.date_modified = Date.now();
  try {
    if (note.author === null) {
      throw error('No authorized author');
    }
    const newNote = new NoteModel(note);
    const savedNote = await newNote.save();
    res.status(200).json('Successfully created note');
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// update note
router.put('/update/:id', authenticateToken, (req, res) => {
  const _id = req.params.id;
  const note = req.body;
  const update = {
    title: note.title,
    text: note.text,
    bgc: note.bgc,
    date_modified: Date.now(),
  };
  NoteModel.findOneAndUpdate(
    { _id: _id, soft_deleted: false, author: res.locals.auth.user.name },
    update
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
//remove button functionality
router.put('/delete/:id', authenticateToken, (req, res) => {
  const _id = req.params.id;
  const update = {
    soft_deleted: true,
    date_modified: Date.now(),
    expiresAt: Date.now(),
  };
  NoteModel.findOneAndUpdate(
    { _id: _id, author: res.locals.auth.user.name },
    update
  )
    .then((result) => {
      if (!result) {
        res.status(404).json();
      } else {
        res.status(200).json('Successfully deleted');
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});
// share with button activation
router.put('/share/:id', authenticateToken, (req, res) => {
  const _id = req.params.id;
  const user = req.body.user;
  const update = {
    shared: true,
    $push: { shared_users: [user] },
  };

  UserModel.findOne({ username: user })
    .then((result) => {
      if (!result) {
        //404 if user not found
        res.status(404).json('The User was Not Found... Try Again');
      } else {
        NoteModel.findOneAndUpdate(
          {
            _id: _id,
            author: res.locals.auth.user.name,
            shared_users: { $ne: user },
          },
          update
        ).then((result) => {
          if (!result) {
            res.status(404).json('Already shared with user');
          } else {
            res.status(200).json('Successfully shared');
          }
        });
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});

// comments post functionality
router.put('/comment/:id', authenticateToken, (req, res) => {
  const _id = req.params.id;
  const comment = req.body;
  const update = {
    $push: {
      comments: [
        {
          username: res.locals.auth.user.name,
          comment: comment.comment,
          time: Date.now(),
        },
      ],
    },
  };
  NoteModel.findOneAndUpdate({ _id: _id }, update)
    .then((result) => {
      if (!result) {
        res.status(404).json();
      } else {
        res.status(200).json({ name: res.locals.auth.user.name });
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});

//delete a comment from homenotepage
router.put('/removecomment/:id', authenticateToken, (req, res) => {
  const _id = req.params.id;
  const commentId = req.body.id;
  const update = {
    $pull: {
      comments: { _id: commentId, username: res.locals.auth.user.name },
    },
  };
  NoteModel.findOneAndUpdate({ _id: _id }, update)
    .then((result) => {
      if (!result) {
        res.status(404).json();
      } else {
        res.status(200).json('Comment removed');
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
