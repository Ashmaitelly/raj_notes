const router = require('express').Router();
const bcrypt = require('bcrypt');

const UserModel = require('../models/user');

const jwt = require('jsonwebtoken');

// handle sign-in
router.get('/signin', (req, res) => {
  let user = req.query;

  UserModel.findOne({ username: user.username })
    .then(async (result) => {
      if (!result) {
        //404 if user not found
        res.status(404).json('Invalid username or password');
      } else {
        //compare password
        const auth = await bcrypt.compare(user.password, result.password);
        if (auth) {
          user = { name: result.username };
          const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN, {
            expiresIn: '1d',
          });
          const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN);
          res.json([accessToken, refreshToken]);
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
          //generate tokens
          user = { name: user.username };
          const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN, {
            expiresIn: '1d',
          });
          const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN);
          res.json([accessToken, refreshToken]);
        } else {
          //403 if user already exists
          res.status(403).json('User already exists');
        }
      })
      .catch((err) => res.status(500).json({ error: err }));
  }
});

module.exports = router;
