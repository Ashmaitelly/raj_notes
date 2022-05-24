const router = require("express").Router();

const NoteModel = require("../models/note");

const UserModel = require("../models/user");

//get user notes
router.get("/", (req, res) => {
  const author = req.query.author;
  NoteModel.find({ soft_deleted: false, author: author })
    .sort({ date_modified: "desc" })
    .select("title date_modified text bgc author")
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
//remove button functionality
router.put("/delete/:id", (req, res) => {
  const _id = req.params.id;
  const update = {
    soft_deleted: true,
    date_modified: Date.now(),
    expiresAt: Date.now(),
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
// share with button activation
router.put("/share/:id", (req, res) => {
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
        res.status(404).json("The User was Not Found... Try Again");
      } else {
        NoteModel.findOneAndUpdate(
          { _id: _id, shared_users: { $ne: user } },
          update
        ).then((result) => {
          if (!result) {
            res.status(404).json("Already shared with user");
          } else {
            res.status(200).json("Successfully shared");
          }
        });
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});

// comments post functionality
router.put("/comment/:id", (req, res) => {
  const _id = req.params.id;
  const comment = req.body;
  const update = {
    $push: {
      comments: [
        {
          username: comment.username,
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
        res.status(200).json("Comment posted");
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});

//delete a comment from homenotepage
router.put("/removecomment/:id", (req, res) => {
  const _id = req.params.id;
  const commentId = req.body.id;
  const update = {
    $pull: {
      comments: { _id: commentId },
    },
  };
  NoteModel.findOneAndUpdate({ _id: _id }, update)
    .then((result) => {
      if (!result) {
        res.status(404).json();
      } else {
        res.status(200).json("Comment removed");
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});

router.put("/editcomment/:id", (req, res) => {
  const _id = req.params.id;
  const comment= req.body;
  const update = {
    
      comments: [
        {
          comment: comment.comment,
          time: Date.now(),
        },
      ] ,
    }
  ;
  NoteModel.findOneAndUpdate({ _id: _id }, update)
    .then((result) => {
      if (!result) {
        res.status(404).json();
      } else {
        res.status(200).json("Comment Edited");
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;
