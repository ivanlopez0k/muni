require('express');
const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
  const headerToken = req.headers.authorization;

  if (headerToken !== undefined && headerToken.startsWith('Bearer ')) {
    // Tiene token
    try {
      const bearerToken = headerToken.slice(7);
      jwt.verify(bearerToken, process.env.JWTSECRET);
      next();
    } catch (error) {
      res.status(401).json({
        msg: 'token no valido',
        error: error        
      });
    }
  } else {
    res.status(401).json({
      msg: 'Acceso denegado',
    });
  }
};

module.exports = validateToken;
