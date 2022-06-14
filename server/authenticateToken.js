const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
    if (err) return res.status(403).json({ error: 'Error with token' });
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
