const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const authArray = authHeader && authHeader.split(' ');
  const accessToken = authArray[1];
  const refreshToken = authArray[2];

  if (accessToken == null) return res.sendStatus(401);

  jwt.verify(accessToken, process.env.ACCESS_TOKEN, (err, user) => {
    if (user) {
      req.user = user;
      next();
    }
  });
}

function refreshToken(refreshToken, res) {
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, user) => {});
}

module.exports = authenticateToken;
