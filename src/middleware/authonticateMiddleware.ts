import { Request, Response, NextFunction } from 'express';
import config from '../middleware/config';
import jwt from 'jsonwebtoken';
import Error from '../utils/errorHandler';
import asyncHandler from 'express-async-handler';

const handleUthontication = (next: NextFunction) => {
  const error: Error = new Error('Login Error: Please try again');
  error.status = 401;
  next(error);
};

const protect = asyncHandler(async (req: Request, _res: Response, next: NextFunction) => {
  try {
    // get authHeader
    const authHeader = req.get('Authorization');
    if (authHeader) {
      const bearer = authHeader.split(' ')[0].toLowerCase();
      const token = authHeader.split(' ')[1];
      if (token && bearer === 'bearer') {
        const decode = jwt.verify(token, config.tokenSecret as unknown as string);
        if (decode) {
          next();
        } else {
          // failed to authenticate user
          handleUthontication(next);
        }
      } else {
        // token type not bearer
        handleUthontication(next);
      }
    } else {
      // no token provided
      handleUthontication(next);
    }
  } catch (error) {
    handleUthontication(next);
  }
});

export default protect;
