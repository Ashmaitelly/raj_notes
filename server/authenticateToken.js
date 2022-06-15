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
      res.locals.refresh = refreshToken;
      next();
    }
    res.locals.auth = auth;
    next();
  });
}

module.exports = authenticateToken;
