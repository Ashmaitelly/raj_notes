const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);

const TokenModel = require('./models/token');

function refToken(req, res, next) {
  const ref = res.locals.refresh;
  if (ref) {
    TokenModel.find({ token: ref }).then((result) => {
      let auth = {};
      if (result) {
        jwt.verify(ref, process.env.REFRESH_TOKEN, (err, user) => {
          if (err) {
            throw new Error('Invalid refresh token');
          }
          const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
            expiresIn: '30m',
          });

          auth.user = user;
          auth.token = token;
        });
        res.locals.auth = auth;
      }
    });
  }
  next();
}

module.exports = refToken;
