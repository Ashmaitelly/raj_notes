const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);

const TokenModel = require('./models/token');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const authArray = authHeader && authHeader.split(' ');
  const accessToken = authArray[1];
  const refreshToken = authArray[2];

  if (accessToken == null) return res.sendStatus(401);

  jwt.verify(accessToken, process.env.ACCESS_TOKEN, (err, user) => {
    let auth = {};
    if (user) {
      auth = { user: user };
    }
    if (err) {
      try {
        const refresh = refreshToken(refreshToken);
        auth = { user: refresh[0], token: refresh[1] };
      } catch (error) {
        res.sendStatus(403).json({ message: 'Access denied' });
      }
    }
    req.auth = auth;
    next();
  });
}

function refreshToken(refreshToken) {
  const refresh = [];
  TokenModel.find({ token: refreshToken }).then((result) => {
    if (result) {
      jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, user) => {
        if (err) throw new Error('Invalid refresh token');
        const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
          expiresIn: '30m',
        });
        refresh.push(user, token);
      });
    }
  });

  return refresh;
}

module.exports = authenticateToken;
