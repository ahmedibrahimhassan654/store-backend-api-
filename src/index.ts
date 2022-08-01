import express, { Request, Response } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import helmet from 'helmet';
import ratelimit from 'express-rate-limit';
import errorMiddleware from './middleware/error';
import config from './middleware/config';
const app = express();

console.log(config);

// Load env vars

const PORT = config.port || 3000;
// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('common'));
}

//helmet middleware for security
app.use(helmet());

//add midelware for parsing json
app.use(express.json());

//add rate limit middleware

app.use(
  ratelimit({
    windowMs: 60 * 1000, // 15 minutes
    max: 2, // limit each IP to 3 requests per windowMs
    message: 'Too many requests from this IP, please try again after a miniute',
    standardHeaders: true,
    legacyHeaders: false,
  })
);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
app.use(errorMiddleware);

app.use((_req: Request, res: Response) => {
  res.status(404).json({
    message: 'Ohh you are lost, read the API documentation to find your way back home 😂',
  });
});
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

export default app;
