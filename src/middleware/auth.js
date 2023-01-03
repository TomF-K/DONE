import httpErr from 'http-errors';
import jwt from 'jsonwebtoken';
import { errorHandler } from '../utils/HTTPError.js';

export default errorHandler((req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer')) {
    throw new httpErr.Unauthorized();
  }

  const decodedToken = jwt.verify(
    authorization.split(' ')[1],
    process.env.JWT_SECRET
  );

  if (decodedToken) {
    const { userName, userId, fName, lName } = decodedToken;
    req.userContext = {
      userName,
      userId,
      fName,
      lName,
    };
  }
  next();
});
