import express, { Request, Response } from 'express';
import morgan from 'morgan';

import helmet from 'helmet';
import ratelimit from 'express-rate-limit';
import errorMiddleware from './middleware/error';
import config from './middleware/config';
import db from './DB';
import routes from './routes';
const app = express();

// Load env vars

const PORT = config.port || 3000;
// Dev logging middleware
if (process.env.NODE_ENV === 'dev') {
  app.use(morgan('dev'));
}

//helmet middleware for security
app.use(helmet());

//add midelware for parsing json
app.use(express.json());

//add rate limit middleware

app.use(
  ratelimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // limit each IP to 3 requests per windowMs
    message: 'Too many requests from this IP, please try again after a miniute',
    standardHeaders: true,
    legacyHeaders: false,
  })
);

app.use('/api', routes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

//test DB

db.connect().then((client) => {
  return client
    .query('SELECT NOW()')
    .then(() => {
      client.release();
      console.log(`Connected to DB DB_NAME: ${config.databasename}`);
    })
    .catch((err) => {
      client.release();
      console.error('DB Error', err.message);
    });
});

app.use(errorMiddleware);

app.use((_req: Request, res: Response) => {
  res.status(404).json({
    message: 'Ohh you are lost, read the API documentation to find your way back home 😂',
  });
});
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT} at  ${process.env.NODE_ENV} env`);
});

export default app;
