const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  const secret = process.env.JWT_SECRET || 'is it secret? is it safe?';

  if(token){
    jwt.verify(token, secret, (error, decodedToken) => {
      if(error){
        res.status(401).json({ you: 'cannot pass!' }); // invalid
      }else {
        req.decodedToken = decodedToken;
        next();
      }
    })
  }else{
    res.status(401).json({ message: 'please provide credentials!' });
  }
};
