const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const token = bearerHeader.split(' ')[1];
    jwt.verify(token, 'MY_SECRET_KEY', (err, authData) => {
      if (err) {
        return res.status(403).json({ message: 'Forbidden: Invalid Token' });
      } else {
        req.user = authData;
        next();
      }
    });
  } else {
    return res.status(403).json({ message: 'Forbidden: Token Required' });
  }
}

module.exports = verifyToken;
