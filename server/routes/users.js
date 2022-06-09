const router = require('express').Router();
const bcrypt = require('bcrypt');

const UserModel = require('../models/user');

const jwt = require('jsonwebtoken');

// handle sign-in
router.get('/signin', (req, res) => {
  let user = req.query;

  UserModel.findOne({ username: user.username })
    .then((result) => {
      if (!result) {
        //404 if user not found
        res.status(404).json('Invalid username or password');
      } else {
        //compare password
        if (bcrypt.compare(user.password, result.password)) {
          user = { name: result.username };
          const token = jwt.sign(user, process.env.ACCESS_TOKEN);
          res.json(token);
        } else {
          res.status(404).json('Invalid username or password');
        }
      }
    })
    .catch((err) => res.status(500).json(err.message));
});
// handle sign-up
router.post('/signup', async (req, res) => {
  let user = req.body;

  if (!user.password || !user.username) {
    res.status(422).json('Username or password cannot be empty');
  } else {
    UserModel.findOne({ username: user.username })
      .then(async (result) => {
        if (!result) {
          const newUser = new UserModel(user);
          await newUser.save();
          res.status(201).json('User successfully');
        } else {
          //403 if user already exists
          res.status(403).json('User already exists');
        }
      })
      .catch((err) => res.status(500).json({ error: err }));
  }
});

module.exports = router;
