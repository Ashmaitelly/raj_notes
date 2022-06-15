const jwt = require('jsonwebtoken');

const TokenModel = require('./models/token');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const authArray = authHeader && authHeader.split(' ');
  const accessToken = authArray[1];
  const refreshToken = authArray[2];

  if (accessToken == null) return res.sendStatus(401);

  jwt.verify(accessToken, process.env.ACCESS_TOKEN, async (err, user) => {
    let auth = {};
    if (user) {
      auth = { user };
    }
    if (err) {
      let data;
      try {
        data = await TokenModel.findOne({ token: refreshToken });
      } catch (err) {
        return res.sendStatus(401);
      }
      jwt.verify(data.token, process.env.REFRESH_TOKEN, (err, user) => {
        if (user) {
          const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
            expiresIn: '30m',
          });
          auth = { user, token };
        }
        if (err) {
          return res.sendStatus(403);
        }
      });
    }
    res.locals.auth = auth;
    next();
  });
}

module.exports = authenticateToken;
