const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const authArray = authHeader && authHeader.split(' ');
  const accessToken = authArray[1];
  const refreshToken = authArray[2];

  if (accessToken == null) return res.sendStatus(401);

  jwt.verify(accessToken, process.env.ACCESS_TOKEN, (err, user) => {
    let auth = {};
    if (user) {
      auth = { user };
    }
    if (err) {
      jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, user) => {
        if (user) {
          const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
            expiresIn: '30m',
          });
          auth = { user, token };
          console.log(auth);
        }
        if (err) {
          return res.sendStatus(401);
        }
      });
    }
    res.locals.auth = auth;
    next();
  });
}

module.exports = authenticateToken;
