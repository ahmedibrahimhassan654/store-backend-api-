import { Response, Request, NextFunction } from 'express';
import Error from '../utils/errorHandler';

const errorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(error);

  const status = error.status || 500;
  const message = error.message || 'Whoops!! something went wrong';
  res.status(status).json({ status, message });
  next();
};

export default errorMiddleware;
