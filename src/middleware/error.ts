import { Response, Request, NextFunction } from 'express';
import Error from '../utils/errorHandler';

const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log('error stack', err);
  // if (error.routine === 'ExecConstraints') {
  //   const message = `Resource ${error.column}not found`;
  //   error = new Error(404, message);
  // }
  const status = err.status || 500;
  const message = err.message || 'Whoops!! something went wrong';
  res.status(status).json({ status, message });
  next();
};

export default errorMiddleware;
